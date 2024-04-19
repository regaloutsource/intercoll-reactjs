import React
 from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';

import { useTheme } from '@mui/material/styles';

type INavItem = {
    id:number,
    name: string,
    icon: JSX.Element | null,
    href: string,
    open: boolean,
    handleNavLinkClick: (id:number) => void,
}


const NavItem: React.FC<INavItem> = (props) => {
    const { id,name, icon, href, open,handleNavLinkClick } = props
    const theme = useTheme();
    return <ListItemButton
        onClick={() => handleNavLinkClick(id) }
        disableGutters
        component={RouterLink}
        to={href}
        sx={{
            position: 'relative',
            textTransform: 'capitalize',
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            '&.active': {
                color: 'text.primary',
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
                borderLeft: `4px solid ${theme.palette.primary.main}`
            },
        }}
    >
        
        {
        
        icon && open?<ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}> {icon} </ListItemIcon>
        :<Tooltip title={name}>
                   <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}> {icon} </ListItemIcon>
        </Tooltip>}
        <ListItemText disableTypography primary={name} sx={{ opacity: open ? 1 : 0, fontSize: icon ? '1rem' : '0.75rem' }} />
    </ListItemButton>
}


export default NavItem;