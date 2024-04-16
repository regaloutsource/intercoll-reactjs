import React from 'react'
import DataTable from '../../components/DataTable/DataTable'

type bankDetailsProp = {
    date:string,
    time:string,
    fileName:string
}
const header = ['Date','Time','File Name'];
const sampleData:Array<bankDetailsProp> = []

const BankDetailsTable = () => {
  return (
    <DataTable title={'Bank Details'} dataTableHeader={header} data={sampleData}/>
  )
}

export default BankDetailsTable