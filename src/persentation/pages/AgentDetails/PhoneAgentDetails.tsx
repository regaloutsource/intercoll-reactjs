import React from 'react'
import DataTable from '../../components/DataTable/DataTable';

const sampleData: Array<PhoneAgentDetailsInterface> = [
    {
        name: "David Brown",
        opCode: "ABC123",
        email: "davidbrown@example.com",
        leaderEmail: "leader@example.com"
    },
    {
        name: "Sophia Miller",
        opCode: "DEF456",
        email: "sophiamiller@example.com",
        leaderEmail: "leader@example.com"
    },
    {
        name: "Oliver Wilson",
        opCode: "GHI789",
        email: "oliverwilson@example.com",
        leaderEmail: "leader@example.com"
    }
];

const header=['Name','Op Code','Email','Leader Email'];


const PhoneAgentDetails = () => {
  return (
    <DataTable title='Phone Agent Details' dataTableHeader={header} data={sampleData} />
  )
}

export default PhoneAgentDetails