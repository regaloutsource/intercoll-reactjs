import React from 'react';
import DataTable from '../../components/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RegisterModal from '../../components/RegisterModel/RegisterModel';
import RegisterTargetForm from '../../components/RegisterTargetForm/RegisterTargetForm';

const header: GridColDef[] = [
  { field: "target", headerName: "Targets",flex:1 },
  { field: "date", headerName: "Date", type: 'date',flex:1 }
]
const date = new Date()
const sampleData = [
  { id: '1', target: 0, date: date },
  { id: '2', target: 24, date: date },
  { id: '3', target: 56, date: date },
  { id: '4', target: 78, date: date },
  { id: '5', target: 342, date: date },
  { id: '6', target: 12, date: date },
]

const TargetTable:React.FC = () => {
  const [openModel, setOpenModel] = React.useState(false);
  const handleModelOpen = () => {
    setOpenModel(true);
  };

  const handleModelClose = () => {
    setOpenModel(false);
  };
  return (
    <Box>
      <Button variant='contained' onClick={handleModelOpen} sx={{my:2}}>Add Target</Button>
      <DataTable
        title='Targets'
        headers={header}
        data={sampleData}
        enableEdit={true}
        enableDelete={true}
      />
        <RegisterModal open={openModel} handleClose={handleModelClose} modelHeading="Add Target" child={<RegisterTargetForm/>} />
    </Box>
    

  )
}

export default TargetTable