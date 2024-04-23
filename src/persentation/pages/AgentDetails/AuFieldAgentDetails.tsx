import React from 'react';
import { FieldAgentInterface } from '../../../domain/interfaces/AgentsInterface';
import DataTable from '../../components/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

const sampleData: Array<FieldAgentInterface> = [{
  id:'1',
  name: "Sarah Lee",
  opCode: "JKL012",
  email: "sarahlee@example.com",
  leaderEmail: "leader@example.com",
  appVersion: "3.1.2",
  device: "iOS"
}];

const header: GridColDef[] = [
  { field: 'name', headerName: 'Name' },
  { field: 'opCode', headerName: 'Op Code' },
  { field: 'email', headerName: 'Email' },
  { field: 'leaderEmail', headerName: 'Leader Email' },
  { field: 'appVersion', headerName: 'App Version' },
  { field: 'device', headerName: 'Device' },
];

const AuFieldAgentDetails = () => {
  return (
      <DataTable
      title='AU Field Agent Details'
      headers={header}
      data={sampleData}
      enableAdd={true}
      enableDelete={true}
      enableEdit={true}
    />

  );
};

export default AuFieldAgentDetails;
