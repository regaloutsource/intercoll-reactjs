import React from 'react'
import DataTable from '../../components/DataGrid/CustomDataGrid'
import { FieldCustomerInterface } from 'src/domain/interfaces/AgentDetailsInterface';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

function getCustomer(
    id:string,
    customerId: number,
    opCode: string,
    amount: number,
    paymentMode: string,
    frequency: string,
    date: Date,
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
    const obj:FieldCustomerInterface = {
        id:id,
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
const dt = new Date();
const obj1 = getCustomer('1',1,'Ak',200,'Direct Debit','Weekly',dt,'23:10','Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null);
const obj2 = getCustomer('2',2,'VJ',10000,'Direct Debit','Montly',dt,'13:00','Y','Y','Y',null,'Y','Y','Y',null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null);
const obj3 = getCustomer('3',3,'Ak',500,'Direct Debit','Weekly',dt,'10:30','Y',null,null,'Y',null,'Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null);
const obj4 = getCustomer('4',4,'GT',500,'Direct Debit','Weekly',dt,'10:30','Y',null,null,'Y',null,'Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null);
const obj5 = getCustomer('5',5,'RR',500,'Direct Debit','Weekly',dt,'10:30','Y',null,null,'Y',null,'Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null,null,'Y',null,null,null,'Y','Y',null);

const objArr = [obj1,obj2,obj3,obj4,obj5]

const header:GridColDef[] =[
{field: 'customerId', headerName: 'Customer ID',type:'number'},
{field: 'opCode', headerName: 'OP Code'}, 
{field: 'amount', headerName: 'Amount',type:'number'}, 
{field: 'paymentMode', headerName: 'Payment Mode'}, 
{field: 'frequency', headerName: 'Frequency'}, 
{field: 'date', headerName: 'Date',type:'date'}, 
{field: 'time', headerName: 'Time'},
{field: 'nopServed', headerName: 'NOP Served'},
{field: 'rsl', headerName: 'RSL'},
{field: 'gna', headerName: 'GNA'},
{field: 'onWinz', headerName: 'On Winz'},
{field: 'efs', headerName: 'EFS'},
{field: 'pfs', headerName: 'PFS'},
{field: 'escalate', headerName: 'Escalate'},
{field: 'dtrUnknown', headerName: 'DTR Unknown'},
{field: 'revist', headerName: 'Revist'},
{field: 'noOneHome', headerName: 'No One Home'},
{field: 'businessCard', headerName: 'Business Card'},
{field: 'veda', headerName: 'Veda'},
{field: 'swd', headerName: 'SWD'},
{field: 'swo', headerName: 'SwO'},
{field: 'inboundCall', headerName: 'Inbound Call'},
{field: 'outboundCall', headerName: 'Outbound call'},
{field: 'newDetails', headerName: 'New Details'},
{field: 'agw', headerName: 'AGW'},
{field: 'lmtc', headerName: 'LMTC'},
{field: 'nfi', headerName: 'NFI'},
{field: 'cx', headerName: 'CX'},
{field: 'detailsConf', headerName: 'Details Conf'},
{field: 'fbMessage', headerName: 'FB Message'},
{field: 'ss', headerName: 'SS'},
{field: 'exe', headerName: 'EXE'},
{field: 'fbtva', headerName: 'FBTVA'},
{field: 'doc', headerName: 'Doc'},
{field: 'fbtvc', headerName: 'FBTVC'},
{field: 'repl', headerName: 'REPL'},
{field: 'estateNum', headerName: 'EstateNum'}, 
{field: 'attachment', headerName: 'Attachment'},
]


const FieldAgentReport:React.FC = () => {
    return (
        <DataTable
         title='Field Agent Report' 
         headers={header} 
         data={objArr}
         enableDelete={true}
        />
    )
}

export default FieldAgentReport;