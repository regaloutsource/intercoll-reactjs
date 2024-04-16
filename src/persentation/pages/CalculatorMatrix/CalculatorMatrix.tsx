import React from 'react'
import DataTable from '../../components/DataTable/DataTable'
const header = ['Frequency','Debt Range Min (in $)','Debt Range Max (in $)','Approved Amount (in $)','Min Accept Amount (in $)','Declined Lower Level(in $)']

const data = [
    {
        frequency:'Weekly',
        minDebt: 124,
        maxDebt: 250,
        approvedAmt: 12.34,
        minAcceptAmt: 12.56,
        declinedLL: 12.5
    }
]

const CalculatorMatrix = () => {
  return (
    <DataTable title='Calculator Matrix' dataTableHeader={header} data={data}/>
  )
}

export default CalculatorMatrix