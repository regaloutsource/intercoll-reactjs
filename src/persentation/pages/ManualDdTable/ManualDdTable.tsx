import React from 'react';
import DataTable from '../../components/DataTable/DataTable';

const header = ["DD's", "Date"]
const date = new Date().toLocaleDateString();
const sampleData = [
    {dd:1234 , date:date },
    {dd:34 , date:date },
    {dd:56 , date:date },
    {dd:678 , date:date },
    {dd:342 , date:date },
    {dd:12 , date:date },
]



const ManualDdTable = () => {
  return (
    <DataTable title='Direct Debits' dataTableHeader={header} data={sampleData}/>
  )
}

export default ManualDdTable