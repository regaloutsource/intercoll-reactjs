import React from 'react'
import DataTable from '../../hoc/DataGrid/CustomDataGrid'
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

type bankDetailsProp = {
    date:string,
    time:string,
    fileName:string
}
const header:GridColDef[] = [
  {field:'date' , headerName:'Date',flex:1},
  {field:'time' , headerName:'Time',flex:1},
  {field:'string' , headerName:'File Name',flex:1}
];
const sampleData:Array<bankDetailsProp> = []

const BankDetailsTable:React.FC = () => {
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