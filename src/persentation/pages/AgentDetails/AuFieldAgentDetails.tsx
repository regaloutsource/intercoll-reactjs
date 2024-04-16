import React from 'react'
import { FieldAgentDetailsInterface } from '../../../domain/interfaces/Tables/FieldAgentDetailsInterface';
import DataTable from '../../components/DataTable/DataTable';

const sampleData: Array<FieldAgentDetailsInterface> =[ {
    name: "Sarah Lee",
    opCode: "JKL012",
    email: "sarahlee@example.com",
    leaderEmail: "leader@example.com",
    appVersion: "3.1.2",
    device: "iOS"
}]

const header = ['Name','Op Code','Email','Leader Email','App Version','Device']

const AuFieldAgentDetails = () => {
  return (
    <DataTable title='AU Field Agent Details' dataTableHeader={header} data={sampleData} />
  )
}

export default AuFieldAgentDetails