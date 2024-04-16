import React from 'react'
import DataTable from '../../components/DataTable/DataTable'


const header=['Name','Op Code','Email','Leader Email'];
const sampleData: Array<PhoneAgentDetailsInterface> = [
    {
        name: "Alice Johnson",
        opCode: "XYZ789",
        email: "alicejohnson@example.com",
        leaderEmail: "leader@example.com"
    },
    {
        name: "Bob Smith",
        opCode: "MNO456",
        email: "bobsmith@example.com",
        leaderEmail: "leader@example.com"
    },
    {
        name: "Emily Davis",
        opCode: "PQR123",
        email: "emilydavis@example.com",
        leaderEmail: "leader@example.com"
    }
];

const AuPhoneAgentDetails = () => {
  return (
    <DataTable title='AU Phone Agent Details' dataTableHeader={header} data={sampleData} />
  )
}

export default AuPhoneAgentDetails