import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useRef } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridToolbar,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

import MuiPagination from '@mui/material/Pagination';
import { PaginationProps } from '@mui/material/Pagination';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme';


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close'
import useMediaQuery from '@mui/material/useMediaQuery'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';


import DialogBox from '../DialogBox/DialogBox';
import RegisterModal from '../RegisterModel/RegisterModel';
//import DataGrid from '@mui/x-data-grid/DataGrid';

import './customDataGrid.css'
import { TablePaginationProps } from '@mui/material';

interface IdataTable {
  title: string,
  headers: GridColDef[];
  data: GridRowsProp;
  enableAdd?: boolean;
  enableDelete?: boolean;
  enableEdit?: boolean;
}

const StyledGridOverlay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  '& .ant-empty-img-1': {
    fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
  },
  '& .ant-empty-img-2': {
    fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
  },
  '& .ant-empty-img-3': {
    fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
  },
  '& .ant-empty-img-4': {
    fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
  },
  '& .ant-empty-img-5': {
    fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
    fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        style={{ flexShrink: 0 }}
        width="240"
        height="200"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
}

const adjustCol = (arr: GridColDef[], isEditable: boolean): GridColDef[] => {
  arr.forEach((item) => {
    item['width'] = 200;
    item['headerClassName'] = 'row-head';
    if (isEditable) item['editable'] = true;
  })
  return arr
}


const DataTable: React.FC<IdataTable> = ({ title, headers, data, enableAdd = false, enableDelete = false, enableEdit = false }) => {
  const [rows, setRows] = useState<GridRowsProp>(data);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [searchTerm, setSearchTerm] = useState<string>('');
  adjustCol(headers, enableEdit)
  useEffect(() => {
    const filteredData = data.filter(item =>
      Object.values(item).some((value) =>
        typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setRows(filteredData);
  }, [data, searchTerm]);


  function Pagination({
    page,
    rowsPerPage,
    className,
    onPageChange,
  }:TablePaginationProps) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Box className={className} sx={{display:'flex',flexDirection:'row' }} >
      <Button variant='text' disabled={(page===0)?true:false} onClick={()=>apiRef.current.setPage(0)}><FirstPageIcon/></Button>
      <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
      />
      <Button variant='text' disabled={(page===(Math.floor(data.length/rowsPerPage)))?true:false} onClick={()=>apiRef.current.setPage(Math.floor(data.length/rowsPerPage))}><LastPageIcon/></Button>
    </Box>
    );
  }
  
  function CustomPagination(props: any) {
    return <GridPagination ActionsComponent={Pagination} {...props} />;
  }

  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };
  //----for delete dialog box--------------------------------------------------------
  const theme = useTheme()
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [delId, setDelId] = React.useState<GridRowId>(-1)
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDeleteDialogOpen = (id: GridRowId) => {
    setDelId(id)
    setOpenDeleteDialog(true);
  };

  const handleDeleteDialogClose = () => {
    setDelId(-1)
    setOpenDeleteDialog(false);
  };
  //----------------------------------------------------------------------------------
  //for Registerating Agent Model

  const [openRegModel, setOpenRegModel] = React.useState(false);
  const handleRegModelOpen = () => {
    setOpenRegModel(true);
  };

  const handleRegModelClose = () => {
    setOpenRegModel(false);
  };

  //-----------------------------------------------------------------------------------

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => {
    setRows(rows.filter((row) => row.id !== id));
    handleDeleteDialogClose();
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  // const dataGridRef = useRef<any>(null);

  // const clearFilters = () => {
  //   if (dataGridRef.current) {
  //       dataGridRef.current.exportDataAsCsv('Yoho');
  //   }
  // };
 
  const columns: GridColDef[] = 
  [
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      headerClassName: 'row-head',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }
      
        const actions = [];
        if (enableEdit) {
          actions.push(
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />
          );
        }
        if (enableDelete) {
          actions.push(
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={() => handleDeleteDialogOpen(id)}
              color="inherit"
            />
          );
        }
        return actions;
      },
    },
    ...headers,
  ];

  return (
    <Card>
      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' alignItems='center' mb={3}>
          <Typography variant='h5' fontWeight='bold' mr={2}>{title}</Typography>
          {enableAdd && <Tooltip title='Register Agent'>
            <Button variant="text" size='small' onClick={handleRegModelOpen}>
              <PersonAddIcon fontSize='medium' />
            </Button>
          </Tooltip>}
          {/* <Button variant='text' size='small' onClick={clearFilters}><Typography>Remove Filters</Typography></Button> */}
        </Box>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: '10px' }}
          size='small'
        />
      </Box>
      <DataGrid
        // apiRef={dataGridRef}
        autoHeight
        rows={rows}
        columns={(enableDelete||enableEdit)?columns:headers}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        slots={{ noRowsOverlay: CustomNoRowsOverlay , toolbar: GridToolbar ,pagination: CustomPagination, }}
        sx={{ '--DataGrid-overlayHeight': '300px', maxWidth: '80vw', marginX: 'auto' }}
        className='data-grid'
        disableRowSelectionOnClick
      />
      <DialogBox id={delId} fullScreen={fullScreen} open={openDeleteDialog} handleClose={handleDeleteDialogClose} title='Are you sure you want to delete this entry?' content={<Typography>This will be permanently deleted</Typography>} actionName='Delete' action={handleDeleteClick} />

      {enableAdd && <RegisterModal open={openRegModel} handleClose={handleRegModelClose} modelHeading={`Register ${title.split(' ')[0]} Agent`} />}
    </Card>
  );
}

export default DataTable;



