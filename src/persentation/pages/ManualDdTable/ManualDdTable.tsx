import React from 'react';

import DataTable from '../../components/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RegisterModal from '../../components/RegisterModel/RegisterModel';
import RegisterDdForm from '../../components/RegisterDdForm/RegisterDdForm';


const header:GridColDef[] = [
 { field:"dd", headerName:"DD's"},
  {field:"date",headerName:"Date",type:'date'}
]
const date = new Date();
const sampleData = [
    {id:'1', dd:1234 , date:date },
    {id:'2', dd:34 , date:date },
    {id:'3', dd:56 , date:date },
    {id:'4', dd:678 , date:date },
    {id:'5', dd:342 , date:date },
    {id:'6', dd:12 , date:date },
]



const ManualDdTable:React.FC = () => {
  const [openModel, setOpenModel] = React.useState(false);
  const handleModelOpen = () => {
    setOpenModel(true);
  };

  const handleModelClose = () => {
    setOpenModel(false);
  };
  return (
    <Box>
      <Button variant='contained' onClick={handleModelOpen} sx={{my:2}}>Add Manual DD</Button>
      <DataTable 
        title='Direct Debits' 
        headers={header} 
        data={sampleData}
        enableEdit={true}
        enableDelete={true}
    />
    <RegisterModal open={openModel} handleClose={handleModelClose} modelHeading="Add Manual DD's" child={<RegisterDdForm/>} />
    </Box>
  )
}

export default ManualDdTable