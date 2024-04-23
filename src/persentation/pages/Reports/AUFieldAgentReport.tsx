import React from 'react';
import { FieldCustomerInterface } from '../../../domain/interfaces/AgentDetailsInterface';
import DataTable from '../../components/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

const header = ['Customer ID', 'OP Code', 'Amount', 'Payment Mode', 'Frequency', 'Date', 'Time', 'NOP Served', 'RSL', 'GNA', 'On Winz', 'EFS', 'PFS', 'Escalate', 'DTR Unknown','Revist','No One Home','Business Card','Veda','SWD','SwO','Inbound Call','Outbound call','New Details','AGW','LMTC','NFI','CX','Details Conf','FB Message','SS','EXE','FBTVA','Doc','FBTVC','REPL','EstateNum','Attachment']

const gridColumns: GridColDef[] = header.map((colName) => {
  const field: keyof FieldCustomerInterface = colName.toLowerCase().replace(/\s+/g, '') as keyof FieldCustomerInterface;

  return {
    field,
    headerName: colName,
  };
});



const generateSampleData = (): FieldCustomerInterface[] => {
  const sampleData: FieldCustomerInterface[] = [];

  for (let i = 1; i <= 10; i++) {
    const dataItem: FieldCustomerInterface = {
      id: `ID${i}`,
      customerId: i,
      opCode: `OP-${i}`,
      amount: Math.floor(Math.random() * 1000) + 1,
      paymentMode: `Payment Mode ${i}`,
      frequency: `Frequency ${i}`,
      date: new Date(),
      time: `Time ${i}`,
      nopServed: `NOP Served ${i}`,
      rsl: `RSL ${i}`,
      gna: `GNA ${i}`,
      onWinz: `On Winz ${i}`,
      efs: `EFS ${i}`,
      pfs: `PFS ${i}`,
      escalate: `Escalate ${i}`,
      dtrUnknown: `DTR Unknown ${i}`,
      revist: `Revist ${i}`,
      noOneHome: `No One Home ${i}`,
      businessCard: `Business Card ${i}`,
      veda: `Veda ${i}`,
      swd: `SWD ${i}`,
      swo: `SWO ${i}`,
      inboundCall: `Inbound Call ${i}`,
      outboundcall: `Outbound Call ${i}`,
      newDetails: `New Details ${i}`,
      agw: `AGW ${i}`,
      lmtc: `LMTC ${i}`,
      nfi: `NFI ${i}`,
      cx: `CX ${i}`,
      detailsConf: `Details Conf ${i}`,
      fbMessage: `FB Message ${i}`,
      ss: `SS ${i}`,
      exe: `EXE ${i}`,
      fbtva: `FBTVA ${i}`,
      doc: `DOC ${i}`,
      fbtvc: `FBTVC ${i}`,
      repl: `REPL ${i}`,
      estateNum: `Estate Num ${i}`,
      attachment: `Attachment ${i}`,
    };

    sampleData.push(dataItem);
  }

  return sampleData;
};

// Generate sample data
const data = generateSampleData();


const AUFieldAgentReport = () => {
  return (
    <DataTable 
      title='AU Field Agent Report' 
      headers={gridColumns} 
      data={data}
      enableDelete={true}
    />
  )
}

export default AUFieldAgentReport