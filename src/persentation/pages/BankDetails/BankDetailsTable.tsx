import React from 'react'
import DataTable from '../../components/DataGrid/CustomDataGrid'
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

type bankDetailsProp = {
    date:string,
    time:string,
    fileName:string
}
const header:GridColDef[] = [
  {field:'date' , headerName:'Date'},
  {field:'time' , headerName:'Time'},
  {field:'string' , headerName:'File Name'}
];
const sampleData:Array<bankDetailsProp> = []

const BankDetailsTable = () => {
  return (
    <DataTable 
      title={'Bank Details'} 
      headers={header} 
      data={sampleData}
      enableDelete={true}
    />
  )
}

export default BankDetailsTable