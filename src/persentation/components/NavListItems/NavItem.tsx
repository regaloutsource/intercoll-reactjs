import { NavLink as RouterLink } from 'react-router-dom';

import { ListItemButton, ListItemText, ListItemIcon, Tooltip } from '@mui/material';

import { navItemProps } from '../../../domain/types/navItemProps';


const NavItem: React.FC<navItemProps> = (props) => {
    const { id,name, icon, href, open,handleNavLinkClick } = props
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
                borderLeft: '4px solid #00f500'
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