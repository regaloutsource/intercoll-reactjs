import React from 'react';
import { useState, useEffect } from 'react';
import DataTable from '../../hoc/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RegisterModal from '../../components/RegisterModel/RegisterModel';
import RegisterDdForm from '../../components/RegisterDdForm/RegisterDdForm';

import { AlertState } from '../../../domain/interfaces/AlertStateInterface';
import { GET_MANUAL_DDS } from '../../../data/ApiRequest/queries';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_MANUAL_DD, DELETE_MANUAL_DD, EDIT_MANUAL_DD } from '../../../data/ApiRequest/mutations';
import SnackbarAlert from '../../hoc/Alerts/SnackbarAlert';



const header:GridColDef[] = [
 { field:"dds", headerName:"DD's",flex:1,headerAlign:'center',align:'center'},
  {field:"date",headerName:"Date",type:'date',flex:1,headerAlign:'center',align:'center'}
]



interface IManualDD {
  id:number,
  dds: number,
  date: string
}

const ManualDdTable:React.FC = () => {
  const [openModel, setOpenModel] = useState(false);

  const [tableData, setTableData] = useState<Partial<IManualDD>[]>([]);
  const [alert, setAlert] = useState<AlertState>({ open: false, message: '', severity: 'error' });

  const { data } = useQuery(GET_MANUAL_DDS);

  useEffect(() => {
    if (data) {
      const transformedData: Partial<IManualDD>[] = data?.getAllManualDDs?.map((dd: IManualDD) => ({
        id: dd.id,
        dds: dd.dds,
        date: new Date(dd.date)
      }));
      setTableData(transformedData);
    }
  }, [data]);

  const [registerManualDDMutation] = useMutation(CREATE_MANUAL_DD, {
    refetchQueries: [{ query: GET_MANUAL_DDS}],
  });
  const [deleteManualDDMutation] = useMutation(DELETE_MANUAL_DD)
  const [editManualDDMutation] = useMutation(EDIT_MANUAL_DD)

  const handleCreateManualDD = async (input: any) => {
    try {
      const { dds,date } = input;
      const variables = {
        input: {
          dds,
          date,
        },
      };
      const { data: mutationData } = await registerManualDDMutation({ variables });
      if (mutationData) {
        setAlert({ open: true, message: 'Manual DD added successfully', severity: 'success' });
      }
      handleModelClose();
    } catch (error: any) {
      setAlert({ open: true, message: error.message, severity: 'error' });
    }
  };

  const onDelete = async (id: any) => {
    try {
      const variables = {
        deleteManualDdId: Number(id)
      }
      
      await deleteManualDDMutation({ variables });
      setAlert({open:true,message:'Deleted Successfully',severity:'success'})
    } catch (error:any) {
      setAlert({open:true,message:error.message,severity:'error'})
      throw error;
    }
    
  }

  const onEdit = async (updateData:any) => {
    try {
      const {id,dds,date} = updateData;
      const variables = {
        input: {
          id:id,
          dds: Number(dds),
          date,
        },
      };

      await editManualDDMutation({ variables })
      setAlert({open:true,message:'Updated Successfully',severity:'success'})
    } catch (error:any) {
      setAlert({open:true,message:error.message,severity:'error'})
    }
  }

  const handleClose = () => {
    setAlert({ open: false, message: '', severity: 'error' });
  };

  const handleModelOpen = () => {
    setOpenModel(true);
  };

  const handleModelClose = () => {
    setOpenModel(false);
  };
  return (
    <Box>
      <Button variant='contained' onClick={handleModelOpen} sx={{my:2}}>Add Manual DD</Button>
      <DataTable 
        title='Direct Debits' 
        headers={header} 
        data={tableData}
        enableEdit={true}
        enableDelete={true}
        onDelete={onDelete}
        onEdit={onEdit}
    />
    <RegisterModal open={openModel} handleClose={handleModelClose} modelHeading="Add Manual DD's" child={<RegisterDdForm onSubmit={handleCreateManualDD}/>} />
    <SnackbarAlert open={alert.open} message={alert.message} handleClose={handleClose} severity={alert.severity!} />
    </Box>
  )
}

export default ManualDdTable