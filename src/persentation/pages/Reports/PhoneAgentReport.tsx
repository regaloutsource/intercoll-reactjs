import React from 'react'
import { useState } from 'react';
import { PhoneCustomerInterface } from '../../../domain/interfaces/AgentDetailsInterface';
import DataTable from '../../hoc/DataGrid/CustomDataGrid'
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { PhoneAgentCustomerFilter } from 'src/domain/interfaces/gql/PhoneAgentInterface';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PHONE_AGENT_CUSTOMER_DATA } from '../../../data/ApiRequest/queries';
import SnackbarAlert from '../../hoc/Alerts/SnackbarAlert';
import { AlertState } from '../../../domain/interfaces/AlertStateInterface';
import { DELETE_PHONE_AGENT_CUSTOMER_DATA } from '../../../data/ApiRequest/mutations';


const header: GridColDef[] = [
  { field: 'ccid', headerName: 'Customer ID',type:'string',flex:1,headerAlign:'center',align:'center' },
  { field: 'opcode', headerName: 'Op Code',type:'string',flex:1,headerAlign:'center',align:'center' },
  { field: 'amount', headerName: 'Amount',type:'number',flex:2,headerAlign:'center',align:'center' },
  { field: 'dd', headerName: 'DD',type:'number',flex:2,headerAlign:'center',align:'center' },
  { field: 'date', headerName: 'Date',type:'date',flex:2,headerAlign:'center',align:'center' },
  { field: 'time', headerName: 'Time',type:'string',flex:2,headerAlign:'center',align:'center' },
];


const PhoneAgentReport:React.FC = () => {
  const [alert, setAlert] = useState<AlertState>({ open: false, message: '', severity: 'error' });

  const filter={
  startDate: "2024-01-01",
  endDate: "2024-12-31",
  country: "NZ"
  }
  
  const { data } =  useQuery(GET_PHONE_AGENT_CUSTOMER_DATA, {
    variables: { ...filter },
  });

  const [deleteAgentDataMutation] = useMutation(DELETE_PHONE_AGENT_CUSTOMER_DATA)
   
  const transformedData = data?.getPhoneAgentCustomerData.map((item: any) => ({
      id: item.phoneDataId,
      ccid: item.ccid,
      amount: item.amount,
      dd: Number(item.dd),
      date: new Date(item.date),
      time: item.time,
      opcode: item.agent.opcode
      
  }))??[]; 

  const onDelete = async (id: any) => {
    try {
      const variables = {
          phoneDataId: Number(id)
      }
      
      await deleteAgentDataMutation({ variables });
      setAlert({open:true,message:'Deleted Successfully',severity:'success'})
    } catch (error:any) {
      setAlert({open:true,message:error.message,severity:'error'})
    }
    
  }

  const handleClose = () => {
    setAlert({ open: false, message: '', severity: 'error' });
  };

  return (
    <>
    <DataTable
     title='Phone Agent Report' 
     headers={header} 
     data={transformedData}
     enableDelete={true}
    onDelete={onDelete}
    />
    <SnackbarAlert open={alert.open} message={alert.message} handleClose={handleClose} severity={alert.severity!} />
    </>
  )
}

export default PhoneAgentReport