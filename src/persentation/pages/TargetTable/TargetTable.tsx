import React from 'react';
import { useState, useEffect } from 'react';
import DataTable from '../../hoc/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RegisterModal from '../../components/RegisterModel/RegisterModel';
import RegisterTargetForm from '../../components/RegisterTargetForm/RegisterTargetForm';
import { AlertState } from '../../../domain/interfaces/AlertStateInterface';
import { GET_TARGET_DDS } from '../../../data/ApiRequest/queries';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_TARGET_DD, DELETE_TARGET_DD, EDIT_TARGET_DD } from '../../../data/ApiRequest/mutations';
import SnackbarAlert from '../../hoc/Alerts/SnackbarAlert';


const header: GridColDef[] = [
  { field: "target", headerName: "Targets",flex:1, headerAlign:'center',align:'center'},
  { field: "date", headerName: "Date", type: 'date',flex:1, headerAlign:'center',align:'center' }
]


interface ITargetDD {
  id: number,
  target: number,
  date: string,
  active: boolean,
}

const TargetTable:React.FC = () => {
  const [openModel, setOpenModel] = React.useState(false);

  const [tableData, setTableData] = useState<Partial<ITargetDD>[]>([]);
  const [alert, setAlert] = useState<AlertState>({ open: false, message: '', severity: 'error' });

  const { data } = useQuery(GET_TARGET_DDS);

  useEffect(() => {
    if (data) {
      const transformedData: Partial<ITargetDD>[] = data?.getAllTargetDDs?.map((dd: ITargetDD) => ({
        id: dd.id,
        target: dd.target,
        date: new Date(dd.date)
      }));
      setTableData(transformedData);
    }
  }, [data]);

  const [registerTargetDDMutation] = useMutation(CREATE_TARGET_DD, {
    refetchQueries: [{ query: GET_TARGET_DDS}],
  });
  const [deleteTargetDDMutation] = useMutation(DELETE_TARGET_DD)
  const [editTargetDDMutation] = useMutation(EDIT_TARGET_DD)

  const handleCreateTargetDD = async (input: any) => {
    console.log("function Called");
    try {
      const { target,date } = input;
      const variables = {
        input: {
          target,
          date,
          active:true,
        },
      };
      const { data: mutationData } = await registerTargetDDMutation({ variables });
      if (mutationData) {
        setAlert({ open: true, message: 'Target DD added successfully', severity: 'success' });
      }
      handleModelClose();
    } catch (error: any) {
      setAlert({ open: true, message: error.message, severity: 'error' });
    }
  };

  const onDelete = async (id: any) => {
    try {
      const variables = {
        deleteTargetDdId: Number(id)
      }
      
      await deleteTargetDDMutation({ variables });
      setAlert({open:true,message:'Deleted Successfully',severity:'success'})
    } catch (error:any) {
      setAlert({open:true,message:error.message,severity:'error'})
      throw error;
    }
    
  }

  const onEdit = async (updateData:any) => {
    try {
      const {id,target,date} = updateData;
      const variables = {
        input: {
          id:id,
          target: Number(target),
          date,
        },
      };

      await editTargetDDMutation({ variables })
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
      <Button variant='contained' onClick={handleModelOpen} sx={{my:2}}>Add Target</Button>
      <DataTable
        title='Targets'
        headers={header}
        data={tableData}
        enableEdit={true}
        enableDelete={true}
        onDelete={onDelete}
        onEdit={onEdit}

      />
        <RegisterModal open={openModel} handleClose={handleModelClose} modelHeading="Add Target" child={<RegisterTargetForm onSubmit={handleCreateTargetDD}/>} />
        <SnackbarAlert open={alert.open} message={alert.message} handleClose={handleClose} severity={alert.severity!} />
    </Box>
    

  )
}

export default TargetTable