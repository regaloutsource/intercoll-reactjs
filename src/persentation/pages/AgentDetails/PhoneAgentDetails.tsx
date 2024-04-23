import React from 'react'

import DataTable from '../../components/DataGrid/CustomDataGrid';
import { PhoneAgentInterface } from '../../../domain/interfaces/AgentsInterface'
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

const sampleData: Array<PhoneAgentInterface> = [
    {
        id:'1',
        name: "David Brown",
        opCode: "ABC123",
        email: "davidbrown@example.com",
        leaderEmail: "leader@example.com"
    },
    {
        id:'2',
        name: "Sophia Miller",
        opCode: "DEF456",
        email: "sophiamiller@example.com",
        leaderEmail: "leader@example.com"
    },
    { 
        id:'3',
        name: "Oliver Wilson",
        opCode: "GHI789",
        email: "oliverwilson@example.com",
        leaderEmail: "leader@example.com"
    }
];

const header: GridColDef[] = [
  { field: 'name', headerName: 'Name' },
  { field: 'opCode', headerName: 'Op Code' },
  { field: 'email', headerName: 'Email' },
  { field: 'leaderEmail', headerName: 'Leader Email' },
];


const PhoneAgentDetails = () => {
  return (
    <DataTable 
      title='Phone Agent Details' 
      headers={header} 
      data={sampleData} 
      enableAdd={true}
      enableDelete={true}
      enableEdit={true} 
    />
  )
}

export default PhoneAgentDetails