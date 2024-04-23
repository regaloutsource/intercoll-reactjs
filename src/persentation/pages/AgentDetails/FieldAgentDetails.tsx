import React from 'react'
import { FieldAgentInterface } from '../../../domain/interfaces/AgentsInterface';
import DataTable from '../../components/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

const sampleData: FieldAgentInterface[] = [
    {
        id:'1',
        name: "John Doe",
        opCode: "ABC123",
        email: "johndoe@example.com",
        leaderEmail: "leader@example.com",
        appVersion: "1.2.3",
        device: "Android"
    },
    {   id:'2',
        name: "Jane Smith",
        opCode: "DEF456",
        email: "janesmith@example.com",
        leaderEmail: "leader@example.com",
        appVersion: "2.0.1",
        device: "iOS"
    },
    {
        id:'3',
        name: "Michael Johnson",
        opCode: "GHI789",
        email: "michaeljohnson@example.com",
        leaderEmail: "leader@example.com",
        appVersion: "1.5.0",
        device: "Windows"
    },
    {
      id:'4',
      name: "John Doe",
      opCode: "ABC123",
      email: "johndoe@example.com",
      leaderEmail: "leader@example.com",
      appVersion: "1.2.3",
      device: "Android"
  },
  {   id:'5',
      name: "Jane Smith",
      opCode: "DEF456",
      email: "janesmith@example.com",
      leaderEmail: "leader@example.com",
      appVersion: "2.0.1",
      device: "iOS"
  },
  {
      id:'6',
      name: "Michael Johnson",
      opCode: "GHI789",
      email: "michaeljohnson@example.com",
      leaderEmail: "leader@example.com",
      appVersion: "1.5.0",
      device: "Windows"
  },
  {
    id:'7',
    name: "John Doe",
    opCode: "ABC123",
    email: "johndoe@example.com",
    leaderEmail: "leader@example.com",
    appVersion: "1.2.3",
    device: "Android"
},
{   id:'8',
    name: "Jane Smith",
    opCode: "DEF456",
    email: "janesmith@example.com",
    leaderEmail: "leader@example.com",
    appVersion: "2.0.1",
    device: "iOS"
},
{
    id:'9',
    name: "Michael Johnson",
    opCode: "GHI789",
    email: "michaeljohnson@example.com",
    leaderEmail: "leader@example.com",
    appVersion: "1.5.0",
    device: "Windows"
},
{
  id:'10',
  name: "John Doe",
  opCode: "ABC123",
  email: "johndoe@example.com",
  leaderEmail: "leader@example.com",
  appVersion: "1.2.3",
  device: "Android"
},
{   id:'11',
  name: "Jane Smith",
  opCode: "DEF456",
  email: "janesmith@example.com",
  leaderEmail: "leader@example.com",
  appVersion: "2.0.1",
  device: "iOS"
},
{
  id:'12',
  name: "Michael Johnson",
  opCode: "GHI789",
  email: "michaeljohnson@example.com",
  leaderEmail: "leader@example.com",
  appVersion: "1.5.0",
  device: "Windows"
}
];

const header: GridColDef[] = [
  { field: 'name', headerName: 'Name' },
  { field: 'opCode', headerName: 'Op Code' },
  { field: 'email', headerName: 'Email' },
  { field: 'leaderEmail', headerName: 'Leader Email' },
  { field: 'appVersion', headerName: 'App Version' },
  { field: 'device', headerName: 'Device' },
];

const FieldAgentDetails = () => {
  return (
    <DataTable 
      title='Field Agent Details' 
      headers={header} 
      data={sampleData} 
      enableAdd={true} 
      enableDelete={true}
      enableEdit={true}
    />
  )
}

export default FieldAgentDetails