import React from 'react'

import DataTable from '../../components/DataGrid/CustomDataGrid';
import { PhoneAgentInterface } from '../../../domain/interfaces/AgentsInterface';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';


const header: GridColDef[] = [
  { field: 'name', headerName: 'Name' },
  { field: 'opCode', headerName: 'Op Code' },
  { field: 'email', headerName: 'Email' },
  { field: 'leaderEmail', headerName: 'Leader Email' },
];
const sampleData: Array<PhoneAgentInterface> = [
    {
        id:'1',
        name: "Alice Johnson",
        opCode: "XYZ789",
        email: "alicejohnson@example.com",
        leaderEmail: "leader@example.com"
    },
    {
        id:'2',
        name: "Bob Smith",
        opCode: "MNO456",
        email: "bobsmith@example.com",
        leaderEmail: "leader@example.com"
    },
    {   id:'3',
        name: "Emily Davis",
        opCode: "PQR123",
        email: "emilydavis@example.com",
        leaderEmail: "leader@example.com"
    }
];

const AuPhoneAgentDetails = () => {
  return (
    <DataTable
      title='AU Phone Agent Details'
      headers={header}
      data={sampleData}
      enableAdd={true}
      enableDelete={true}
      enableEdit={true}
    />
  )
}

export default AuPhoneAgentDetails