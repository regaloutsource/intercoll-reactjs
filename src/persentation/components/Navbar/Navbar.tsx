import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import styled from '@mui/material/styles/styled'

import MuiAppBar from '@mui/material/AppBar';
import LogoutIcon from '@mui/icons-material/Logout';
import DateRangeIcon from '@mui/icons-material/DateRange';
import './navbar.css'

import { AppBarProps } from '../../../domain/interfaces/AppBarProps';
import { useNavigate } from 'react-router';
import { routes } from '../../../routes/routes';

import DateRangeSelector from '../DateRangeSelector/DateRangeSelector';


export type INavbar = {
  open: boolean,
  handleDrawerOpen: () => void
}

const drawerWidth = 240;
const drawerWidthSmall = 180;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.down('md')]: {
      marginLeft: drawerWidthSmall,
      width: `calc(100% - ${drawerWidthSmall}px)`,
    },
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar: React.FC<INavbar> = (props) => {
  const { open, handleDrawerOpen } = { ...props }
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log('hello')
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openDateSelector = Boolean(anchorEl);
  const id = openDateSelector ? 'simple-popover' : undefined;


  return (
    <AppBar position="fixed" open={open} >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box component='div' className='main-appbar'>
          <Button variant='text' sx={{ color: 'white' }} onClick={handleClick}><DateRangeIcon className='main-appbar-child1' /></Button>
          <Popover
            id={id}
            open={openDateSelector}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <DateRangeSelector onApply={handleClose} onCancel={handleClose} />
          </Popover>
          <Typography variant='h6' fontWeight='bolder' className='main-appbar-child2'>DebtManagers</Typography>
          <Tooltip title='Logout'>
            <Button variant='text' sx={{ color: 'white' }} onClick={() => navigate(routes.LOGIN)}>
              <LogoutIcon className='main-appbar-child3' />
            </Button>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar