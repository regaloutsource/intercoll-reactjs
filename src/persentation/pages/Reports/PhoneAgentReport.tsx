import React from 'react'
import DataTable from '../../components/DataTable/DataTable'
import { PhoneCustomerInterface } from '../../../domain/interfaces/Tables/PhoneCustomerInterface';


const PhoneAgentReport = () => {
  const header = ["Customer ID","Op Code","Amount","DD","Date","Time"]

let objArr= [
    {
        customerId: 1,
        opCode: "ABC123",
        amount: 500,
        dd: 123456,
        date: new Date("2024-04-12").toDateString(),
        time: "10:30 AM"
    },
    {
        customerId: 2,
        opCode: "XYZ789",
        amount: 800,
        dd: 789012,
        date: new Date("2024-04-11").toDateString(),
        time: "2:45 PM"
    },
];
  return (
    <DataTable title='Phone Agent Report' dataTableHeader={header} data={objArr}/>
  )
}

export default PhoneAgentReport