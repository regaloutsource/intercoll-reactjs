import React from 'react'
import DataTable from '../../components/DataTable/DataTable'

function getCustomer(
    customerId: number,
    opCode: string,
    amount: number,
    paymentMode: string,
    frequency: string,
    date: string,
    time: string,
    nopServed: string | null,
    rsl: string | null,
    gna: string | null,
    onWinz: string | null,
    efs: string | null,
    pfs: string | null,
    escalate: string | null,
    dtrUnknown: string | null) {
    const obj = {
        customerId: customerId,
        opCode: opCode,
        amount: amount,
        paymentMode: paymentMode,
        frequency: frequency,
        date: date,
        time: time,
        nopServed: nopServed,
        rsl:rsl,
        gna: gna,
        onWinz: onWinz,
        efs: efs,
        pfs: pfs,
        escalate: escalate,
        dtrUnknown: dtrUnknown
    }
    return obj;
}
const dt = new Date().toDateString();
const obj1 = getCustomer(1,'Ak',200,'Direct Debit','Weekly',dt,'23:10','Y',null,null,null,'Y','Y',null,null);
const obj2 = getCustomer(2,'VJ',10000,'Direct Debit','Montly',dt,'13:00','Y','Y','Y',null,'Y','Y','Y',null);
const obj3 = getCustomer(3,'Ak',500,'Direct Debit','Weekly',dt,'10:30','Y',null,null,'Y',null,'Y',null,null);
const obj4 = getCustomer(4,'GT',500,'Direct Debit','Weekly',dt,'10:30','Y',null,null,'Y',null,'Y',null,null);
const obj5 = getCustomer(5,'RR',500,'Direct Debit','Weekly',dt,'10:30','Y',null,null,'Y',null,'Y',null,null);

const objArr = [obj1,obj2,obj3,obj4,obj5]

const header = ['Customer ID', 'OP Code', 'Amount', 'Payment Mode', 'Frequency', 'Date', 'Time', 'NOP Served', 'RSL', 'GNA', 'On Winz', 'EFS', 'PFS', 'Escalate', 'DTR Unknown']

const FieldAgentReport = () => {
    return (
        <DataTable title='Field Agent Report' dataTableHeader={header} data={objArr}/>
    )
}

export default FieldAgentReport;