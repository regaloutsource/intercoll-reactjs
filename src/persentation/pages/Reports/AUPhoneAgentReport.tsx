import React from 'react'
import { PhoneCustomerInterface } from '../../../domain/interfaces/AgentDetailsInterface';
import DataTable from '../../components/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';


const header: GridColDef[] = [
  { field: 'customerId', headerName: 'Customer ID',type:'string',flex: 1 },
  { field: 'opCode', headerName: 'Op Code',type:'string',flex: 1 },
  { field: 'amount', headerName: 'Amount',type:'number',flex: 2 },
  { field: 'dd', headerName: 'DD',type:'number',flex: 2 },
  { field: 'date', headerName: 'Date',type:'date',flex: 2 },
  { field: 'time', headerName: 'Time',type:'dateTime',flex: 2 },
];
let objArr : Array<PhoneCustomerInterface>= [
    {
        id:'1',
        customerId: 1,
        opCode: "ABC123",
        amount: 500,
        dd: 123456,
        date: new Date("2024-04-12"),
        time: "10:30 AM"
    },
    {
        id:'2',
        customerId: 2,
        opCode: "XYZ789",
        amount: 800,
        dd: 789012,
        date: new Date("2024-04-11"),
        time: "2:45 PM"
    },
];

const AUPhoneAgentReport:React.FC = () => {
  return (
    <DataTable
     title='AU Phone Agent Report'
     headers={header} 
     data={objArr}
     enableDelete={true}
   />
  )
}

export default AUPhoneAgentReport