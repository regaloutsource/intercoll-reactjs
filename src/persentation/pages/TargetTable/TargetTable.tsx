import React from 'react';
import DataTable from '../../components/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

const header:GridColDef[] = [
   {field:"target", headerName:"Targets"},
   {field:"date",headerName:"Date",type:'date'}
 ]
const date = new Date()
const sampleData = [
    { id:'1',target:0 , date:date },
    { id:'2',target:24 , date:date },
    { id:'3',target:56 , date:date },
    { id:'4',target:78 , date:date },
    { id:'5',target:342 , date:date },
    { id:'6',target:12 , date:date },
]



const TargetTable = () => {
  return (
    <DataTable 
    title='Targets' 
    headers={header} 
    data={sampleData}
    enableEdit={true}
    enableDelete={true}
  />
  )
}

export default TargetTable