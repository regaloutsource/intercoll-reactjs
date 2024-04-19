import React, { useState } from 'react';

import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import useMediaQuery from '@mui/material/useMediaQuery'

import DeleteIcon from '@mui/icons-material/Delete';


import DialogBox from '../DialogBox/DialogBox'

import './dataTable.css'
import { useTheme } from '@mui/material/styles';
import RegisterModal from '../RegisterModel/RegisterModel';

type headerDetails ={
  name: string,
  keyName: string,
  type: 'number' | 'string'
}

type IdataTable = {
  title: string;
  dataTableHeader: Array<string>;
  data: Array<any>;
  // enableDelete: boolean;
  // enableEdit: boolean;
  enableRegister?: boolean;
}

const DataTable: React.FC<IdataTable> = ({title,dataTableHeader,data,enableRegister = false}) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [tableData,setTableData] = useState(data)


  const theme = useTheme();
  //for the dialogBox
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [delId,setDelId] = React.useState(-1)
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDeleteDialogOpen = (id:number) => {
    setDelId(id)
    setOpenDeleteDialog(true);
  };

  const handleDeleteDialogClose = () => {
    setDelId(-1)
    setOpenDeleteDialog(false);
  };

  //-------------------------------
  
  //for Registerating Agent Model

  const [openRegModel, setOpenRegModel] = React.useState(false);
  const handleRegModelOpen = () => {
    setOpenRegModel(true);
  };

  const handleRegModelClose = () => {
    setOpenRegModel(false);
  };


  //-----------------------------





  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageOption = parseInt(event.target.value, 10);
    (pageOption === -1)?setRowsPerPage(tableData.length):setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const filteredData = tableData.filter(item =>
      Object.values(item).some((value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  const handleDownload = () => {
    const csvContent =  dataTableHeader.join(',') + '\n' +
    data.map(item => Object.values(item).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'table_data.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const removeItem = (index:number) => {
    handleDeleteDialogClose();
    setTableData(tableData.filter((item,idx) => {
      return idx!==index
    }
  ))
  }


  const goToFirstPage = () => {
    setPage(0);
  };

  const goToLastPage = () => {
    setPage(Math.max(0, Math.ceil(filteredData.length / rowsPerPage) - 1));
  };

  return (
    <Box component='div'>
      <Box display='flex' justifyContent='space-between'>
        <Typography variant='h6' fontWeight='bold'>{title}</Typography>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '10px' }}
        size='small'
      />
      </Box>
      <TableContainer component={Paper} className='table-container'>
        <Table>
          <TableHead>
            <TableRow className='table-head'>
              <TableCell className='table-cell'>Actions</TableCell>
             {dataTableHeader.map((item) =><TableCell className='table-cell' key={item} >
                  {item}  
              </TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {(filteredData.length === 0)
            ?<TableRow>
            <TableCell colSpan={dataTableHeader.length + 1} align="center">
              <Typography variant="subtitle1">No records found</Typography>
            </TableCell>
            </TableRow>
            :filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,idx) => (
              <TableRow>
                <TableCell>
                  <Tooltip title='Delete'>
                    <Button onClick={() => handleDeleteDialogOpen(idx)}>
                      <DeleteIcon/>
                    </Button>
                  </Tooltip>
                  {/* <Tooltip title='Edit'>
                    <Button>
                      <EditIcon/>
                    </Button>
                  </Tooltip> */}
                </TableCell>
                

                {Object.values(row).map((val: any) => {
                  return(
                  
                      <TableCell><Typography variant='body1'>{val}</Typography></TableCell>
        
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
     />
{/* <Box display="flex" justifyContent="space-between">
            <Button onClick={goToFirstPage} disabled={page === 0}>First</Button>
            <Button onClick={goToLastPage} disabled={page >= Math.ceil(filteredData.length / rowsPerPage) - 1}>Last</Button>
</Box> */}
      <Box display='flex' justifyContent='space-between'>
        <Button variant="contained" onClick={handleDownload}> 
        <Typography variant='body1' textTransform='capitalize'>Download Table Content </Typography></Button>
        {enableRegister && <Button variant="contained" onClick={handleRegModelOpen}>Register Agent</Button>}
      </Box>
      
      <DialogBox id={delId} fullScreen={fullScreen} open={openDeleteDialog} handleClose={handleDeleteDialogClose} title='Are you sure you want to delete this entry?' content={<Typography>This will be permanently deleted</Typography>} actionName='Delete' action={removeItem} />

      {enableRegister && <RegisterModal open={openRegModel} handleClose={handleRegModelClose} modelHeading={`Register ${title.split(' ')[0]} Agent`} />}
    </Box>
  );
};

export default DataTable;