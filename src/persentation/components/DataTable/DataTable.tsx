import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  TextField,
  Button,
  Paper,
  Box,
  Typography,
  Tooltip,
  useMediaQuery,
} from '@mui/material';

import { dataTableProps } from '../../../domain/types/dataTableProps';
//import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ShouldDeleteDialogBox from '../DialogBox/DialogBox'

import './dataTable.css'
import { useTheme } from '@mui/material/styles';

const DataTable: React.FC<dataTableProps> = ({title,dataTableHeader,data}) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [tableData,setTableData] = useState(data)

  //for the dialogBox
  const [open, setOpen] = React.useState(false);
  const [delId,setDelId] = React.useState(-1)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = (id:number) => {
    setDelId(id)
    setOpen(true);
  };

  const handleClose = () => {
    setDelId(-1)
    setOpen(false);
  };

  //-------------------------------

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
    handleClose();
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
      <TableContainer component={Paper}>
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
            {(data.length === 0)
            ?<TableRow>
            <TableCell colSpan={dataTableHeader.length + 1} align="center">
              <Typography variant="subtitle1">No records found</Typography>
            </TableCell>
            </TableRow>
            :filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,idx) => (
              <TableRow>
                <TableCell>
                  <Tooltip title='Delete'>
                    <Button onClick={() => handleClickOpen(idx)}>
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
                  
                      <TableCell>{val}</TableCell>
        
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

      <Button variant="contained" onClick={handleDownload} style={{ marginTop: '10px' }}>
        Download Table Content
      </Button>
      <ShouldDeleteDialogBox id={delId} fullScreen={fullScreen} open={open} handleClose={handleClose} removeItem={removeItem} />
    </Box>
  );
};

export default DataTable;