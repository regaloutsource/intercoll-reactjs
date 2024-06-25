import React from 'react';
import { useState } from 'react';
import { FieldCustomerInterface } from '../../../domain/interfaces/AgentDetailsInterface';
import DataTable from '../../hoc/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { AlertState } from '../../../domain/interfaces/AlertStateInterface';
import { GET_FIELD_AGENT_CUSTOMER_DATA } from '../../../data/ApiRequest/queries';
import { useMutation, useQuery } from '@apollo/client';
import SnackbarAlert from '../../hoc/Alerts/SnackbarAlert';
import { DELETE_FEILD_AGENT_CUSTOMER_DATA } from '../../../data/ApiRequest/mutations';

// const header = ['Customer ID', 'OP Code', 'Amount', 'Payment Mode', 'Frequency', 'Date', 'Time', 'NOP Served', 'RSL', 'GNA', 'On Winz', 'EFS', 'PFS', 'Escalate', 'DTR Unknown','Revist','No One Home','Business Card','Veda','SWD','SwO','Inbound Call','Outbound call','New Details','AGW','LMTC','NFI','CX','Details Conf','FB Message','SS','EXE','FBTVA','Doc','FBTVC','REPL','EstateNum','Attachment']

// const gridColumns: GridColDef[] = header.map((colName) => {
//   const field: keyof FieldCustomerInterface = colName.toLowerCase().replace(/\s+/g, '') as keyof FieldCustomerInterface;

//   return {
//     field,
//     headerName: colName,
//     headerAlign:'center',
//     align:'center'
//   };
// });



// const generateSampleData = (): FieldCustomerInterface[] => {
//   const sampleData: FieldCustomerInterface[] = [];

//   for (let i = 1; i <= 10; i++) {
//     const dataItem: FieldCustomerInterface = {
//       id: `ID${i}`,
//       customerId: i,
//       opCode: `OP-${i}`,
//       amount: Math.floor(Math.random() * 1000) + 1,
//       paymentMode: `Payment Mode ${i}`,
//       frequency: `Frequency ${i}`,
//       date: new Date(),
//       time: `Time ${i}`,
//       nopServed: `NOP Served ${i}`,
//       rsl: `RSL ${i}`,
//       gna: `GNA ${i}`,
//       onWinz: `On Winz ${i}`,
//       efs: `EFS ${i}`,
//       pfs: `PFS ${i}`,
//       escalate: `Escalate ${i}`,
//       dtrUnknown: `DTR Unknown ${i}`,
//       revist: `Revist ${i}`,
//       noOneHome: `No One Home ${i}`,
//       businessCard: `Business Card ${i}`,
//       veda: `Veda ${i}`,
//       swd: `SWD ${i}`,
//       swo: `SWO ${i}`,
//       inboundCall: `Inbound Call ${i}`,
//       outboundcall: `Outbound Call ${i}`,
//       newDetails: `New Details ${i}`,
//       agw: `AGW ${i}`,
//       lmtc: `LMTC ${i}`,
//       nfi: `NFI ${i}`,
//       cx: `CX ${i}`,
//       detailsConf: `Details Conf ${i}`,
//       fbMessage: `FB Message ${i}`,
//       ss: `SS ${i}`,
//       exe: `EXE ${i}`,
//       fbtva: `FBTVA ${i}`,
//       doc: `DOC ${i}`,
//       fbtvc: `FBTVC ${i}`,
//       repl: `REPL ${i}`,
//       estateNum: `Estate Num ${i}`,
//       attachment: `Attachment ${i}`,
//     };

//     sampleData.push(dataItem);
//   }

//   return sampleData;
// };

// Generate sample data
// const data = generateSampleData();
const header: GridColDef[] = [
  { field: 'customerId', headerName: 'Customer ID', type: 'number', align: 'center', headerAlign: 'center', width: 160 },
  { field: 'opCode', headerName: 'OP Code', align: 'center', headerAlign: 'center', width: 100 },
  { field: 'amount', headerName: 'Amount', type: 'number', align: 'center', headerAlign: 'center', width: 100 },
  { field: 'paymentMode', headerName: 'Payment Mode', align: 'center', headerAlign: 'center', width: 160 },
  { field: 'frequency', headerName: 'Frequency', align: 'center', headerAlign: 'center', width: 100 },
  { field: 'date', headerName: 'Date', type: 'date', align: 'center', headerAlign: 'center', width: 100 },
  { field: 'time', headerName: 'Time', align: 'center', headerAlign: 'center', width: 100 },
  { field: 'attachment', headerName: 'Attachment', align: 'center', headerAlign: 'center', width: 100 },
  { field: 'buttons', headerName: 'Visit Data Collected', align: 'center', headerAlign: 'center', width: 500 },
]


const AUFieldAgentReport: React.FC = () => {
  const [alert, setAlert] = useState<AlertState>({ open: false, message: '', severity: 'error' });

  const filter = {
    country: "AUS",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
  }

  const { data } = useQuery(GET_FIELD_AGENT_CUSTOMER_DATA, {
    variables: { ...filter }
  });

  const [deleteAgentDataMutation] = useMutation(DELETE_FEILD_AGENT_CUSTOMER_DATA)

  const transformedData = data?.getAllVisits.map((item: any) => ({
    id: Number(item.visitId),
    customerId: item.debtor.debtorId,
    opCode: item.agent.opcode,
    amount: item.amount,
    paymentMode: item.paymentMode?.modeName ?? '--',
    frequency: item.paymentType?.frequencyName ?? '--',
    date: new Date(item.date),
    time: '',
    buttons: item.buttonPressed?.map((btn: any) => btn.buttonName).join(', '),
    attachment: '',
  })) ?? [];



  const onDelete = async (id: any) => {
    try {
      const variables = {
        visitId: id
      }

      await deleteAgentDataMutation({ variables });
      setAlert({ open: true, message: 'Deleted Successfully', severity: 'success' })
    } catch (error: any) {
      setAlert({ open: true, message: error.message, severity: 'error' })
    }

  }

  const handleClose = () => {
    setAlert({ open: false, message: '', severity: 'error' });
  };

  return (
    <>
      <DataTable
        title='AU Field Agent Report'
        headers={header}
        data={transformedData}
        enableDelete={true}
        onDelete={onDelete}
      />
      <SnackbarAlert open={alert.open} message={alert.message} handleClose={handleClose} severity={alert.severity!} />
    </>


  )
}

export default AUFieldAgentReport