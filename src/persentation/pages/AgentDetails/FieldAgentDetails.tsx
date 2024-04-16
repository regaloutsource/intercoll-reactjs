import React from 'react'
import { FieldAgentDetailsInterface } from '../../../domain/interfaces/Tables/FieldAgentDetailsInterface';
import DataTable from '../../components/DataTable/DataTable';

const sampleData: FieldAgentDetailsInterface[] = [
    {
        name: "John Doe",
        opCode: "ABC123",
        email: "johndoe@example.com",
        leaderEmail: "leader@example.com",
        appVersion: "1.2.3",
        device: "Android"
    },
    {
        name: "Jane Smith",
        opCode: "DEF456",
        email: "janesmith@example.com",
        leaderEmail: "leader@example.com",
        appVersion: "2.0.1",
        device: "iOS"
    },
    {
        name: "Michael Johnson",
        opCode: "GHI789",
        email: "michaeljohnson@example.com",
        leaderEmail: "leader@example.com",
        appVersion: "1.5.0",
        device: "Windows"
    }
];

const header = ['Name','Op Code','Email','Leader Email','App Version','Device']


const FieldAgentDetails = () => {
  return (
    <DataTable title='Field Agent Details' dataTableHeader={header} data={sampleData} />
  )
}

export default FieldAgentDetails