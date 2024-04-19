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
    dtrUnknown: string | null,
    revist: string | null,
    noOneHome: string | null,
    businessCard: string | null, 
    veda: string | null,
    swd: string | null,
    swo: string | null,
    inboundCall: string | null,
    outboundcall: string | null,
    newDetails: string | null,
    agw: string | null,
    lmtc: string | null,
    nfi: string | null,
    cx: string | null,
    detailsConf: string | null,
    fbMessage: string | null,
    ss: string | null,
    exe: string | null,
    fbtva: string | null,
    doc: string | null,
    fbtvc: string | null,
    repl: string | null,
    estateNum: string | null,
    attachment: string | null,) {
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
        dtrUnknown: dtrUnknown,
        revist:revist ,
        noOneHome:noOneHome,
        businessCard:businessCard ,
        veda:veda,
        swd:swd,
        swo:swo,
        inboundCall:inboundCall,
        outboundcall:outboundcall,
        newDetails:newDetails,
        agw:agw ,
        lmtc:lmtc ,
        nfi:nfi ,
        cx:cx ,
        detailsConf:detailsConf ,
        fbMessage:fbMessage ,
        ss: ss,
        exe: exe,
        fbtva:fbtva ,
        doc:doc ,
        fbtvc:fbtvc ,
        repl:repl,
        estateNum:estateNum,
        attachment:attachment ,
    }
    return obj;
}
const dt = new Date().toLocaleDateString();
const obj1 = getCustomer(1,'Ak',200,'Direct Debit','Weekly',dt,'23:10','Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null);
const obj2 = getCustomer(2,'VJ',10000,'Direct Debit','Montly',dt,'13:00','Y','Y','Y',null,'Y','Y','Y',null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null);
const obj3 = getCustomer(3,'Ak',500,'Direct Debit','Weekly',dt,'10:30','Y',null,null,'Y',null,'Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null);
const obj4 = getCustomer(4,'GT',500,'Direct Debit','Weekly',dt,'10:30','Y',null,null,'Y',null,'Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null);
const obj5 = getCustomer(5,'RR',500,'Direct Debit','Weekly',dt,'10:30','Y',null,null,'Y',null,'Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null);

const objArr = [obj1,obj2,obj3,obj4,obj5]

const header = ['Customer ID', 'OP Code', 'Amount', 'Payment Mode', 'Frequency', 'Date', 'Time', 'NOP Served', 'RSL', 'GNA', 'On Winz', 'EFS', 'PFS', 'Escalate', 'DTR Unknown','Revist','No One Home','Business Card','Veda','SWD','SwO','Inbound Call','Outbound call','New Details','AGW','LMTC','NFI','CX','Details Conf','FB Message','SS','EXE','FBTVA','Doc','FBTVC','REPL','EstateNum','Attachment']

const FieldAgentReport = () => {
    return (
        <DataTable title='Field Agent Report' dataTableHeader={header} data={objArr}/>
    )
}

export default FieldAgentReport;