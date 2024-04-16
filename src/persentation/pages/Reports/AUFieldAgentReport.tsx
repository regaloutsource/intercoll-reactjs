import React from 'react';
import { FieldCustomerInterface } from '../../../domain/interfaces/Tables/FieldCustomerInterface';
import DataTable from '../../components/DataTable/DataTable';

const header = ['Customer ID', 'OP Code', 'Amount', 'Payment Mode', 'Frequency', 'Date', 'Time', 'NOP Served', 'RSL', 'GNA', 'On Winz', 'EFS', 'PFS', 'Escalate', 'DTR Unknown']

const sampleData = [
    {
        customerId: 1,
        opCode: "ABC123",
        amount: 500,
        paymentMode: "Credit Card",
        frequency: "Monthly",
        date: new Date("2024-04-12").toDateString(),
        time: "10:30 AM",
        nopServed: "Yes",
        rsl: null,
        gna: "No",
        onWinz: null,
        efs: null,
        pfs: "Yes",
        escalate: "No",
        dtrUnknown: null
    },
    {
        customerId: 2,
        opCode: "XYZ789",
        amount: 800,
        paymentMode: "Cash",
        frequency: "Weekly",
        date: new Date("2024-04-11").toDateString(),
        time: "2:45 PM",
        nopServed: "No",
        rsl: "Late Payment",
        gna: null,
        onWinz: "Yes",
        efs: null,
        pfs: null,
        escalate: "Yes",
        dtrUnknown: "No"
    },
    // Add more sample data as needed
];



const AUFieldAgentReport = () => {
  return (
    <DataTable title='AU Field Agent Report' dataTableHeader={header} data={sampleData}/>
  )
}

export default AUFieldAgentReport