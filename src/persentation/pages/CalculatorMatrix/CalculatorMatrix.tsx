import React from 'react'
import DataTable from '../../components/DataGrid/CustomDataGrid'
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

const header:GridColDef[] = [
{field:'frequency' ,headerName:'Frequency'},
{field:'minDebt' ,headerName:'Debt Range Min (in $)',type:'number',flex:1},
{field:'maxDebt' ,headerName:'Debt Range Max (in $)',type:'number',flex:1},
{field:'approvedAmt' ,headerName:'Approved Amount (in $)',type:'number',flex:1},
{field:'minAcceptAmt' ,headerName:'Min Accept Amount (in $)',type:'number',flex:1},
{field:'declinedLL' ,headerName:'Declined Lower Level(in $)',type:'number',flex:1}
]

const data = [
    {
        id:1,
        frequency:'Weekly',
        minDebt: 124,
        maxDebt: 250,
        approvedAmt: 12.34,
        minAcceptAmt: 12.56,
        declinedLL: 12.5
    }
]

const CalculatorMatrix:React.FC = () => {
  return (
    <DataTable 
      title='Calculator Matrix' 
      headers={header} 
      data={data}
    />
  )
}

export default CalculatorMatrix