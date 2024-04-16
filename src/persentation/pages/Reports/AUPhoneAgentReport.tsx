import React from 'react'
import { PhoneCustomerInterface } from '../../../domain/interfaces/Tables/PhoneCustomerInterface';
import DataTable from '../../components/DataTable/DataTable';

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

const AUPhoneAgentReport = () => {
  return (
    <DataTable title='AU Phone Agent Report' dataTableHeader={header} data={objArr}/>
  )
}

export default AUPhoneAgentReport