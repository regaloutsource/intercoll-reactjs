import React from 'react';
import DataTable from '../../components/DataTable/DataTable';

const header = ["Target", "Date"]
const date = new Date().toLocaleDateString();
const sampleData = [
    {dd:0 , date:date },
    {dd:24 , date:date },
    {dd:56 , date:date },
    {dd:78 , date:date },
    {dd:342 , date:date },
    {dd:12 , date:date },
]



const TargetTable = () => {
  return (
    <DataTable title='Targets' dataTableHeader={header} data={sampleData}/>
  )
}

export default TargetTable