import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './navList.css'
import { Box, Menu, MenuItem, Tooltip } from '@mui/material';
import { ListItemProps } from '../../../domain/types/listItemProps';

import { NavListItem } from './navListItems';
import NavItem from './NavItem';
import { NavLink } from 'react-router-dom';



const ListItems: React.FC<ListItemProps> = ({ open }) => {
  const [expandedButton, setExpandedButton] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const [activeLinkParent, setActiveLinkParent] = useState<null | number>(null);
  const handleNavLinkClick = (id:number) => {
    setActiveLinkParent(id);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setExpandedButton(null)
    console.log('handleClose called')
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setExpandedButton((prevId) => (prevId === id ? null : id));
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setExpandedButton(null),
    setAnchorEl(null)
  }, [open]);



  return (
    <List className='subCategoryList'>
      {NavListItem.map((item) => (
        <Box key={item.id}>

          {/* If the List Item does not have a subCategory, it behaves as a navLink */}
          <ListItem disablePadding sx={{ display: 'block' }} >
            {item.href && <NavItem id={item.id} name={item.name} icon={item.icon} href={item.href} open={open} handleNavLinkClick={handleNavLinkClick} />}
          </ListItem>

          {/* If the List Item has subCategory, it behaves as a button whose onCLick function shows the subcategory */
          item.subCategory && <ListItemButton
            onClick={(e) => handleClick(e, item.id)}
            sx={{
              position: 'relative',
              textTransform: 'capitalize',
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}

            className={(item.id === activeLinkParent)?'active':''}
          >
            {open?<ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>{item.icon}</ListItemIcon>
            :<Tooltip title={item.name}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>{item.icon}</ListItemIcon>
            </Tooltip>}
            <ListItemText disableTypography primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          }

          {/* if the sidebar is opened */
          (expandedButton === item.id) && open && item.subCategory && (
          <List className=''>
            {item.subCategory?.map((category) => (
              <ListItem key={category.name} disablePadding>
                <NavItem id={item.id} name={category.name} icon={null} href={category.href} open={open} handleNavLinkClick={handleNavLinkClick}/>
              </ListItem>
            ))}
          </List>
          )}

          {/* if sidebar is closed */
          (expandedButton === item.id) && !open && item.subCategory && (
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
            >
              {item.subCategory?.map((category) => (
                <MenuItem key={category.name} onClick={handleClose}>
                  {/*NavItem not working */}
                  <NavLink to={category.href} className='nav-menu-items' onClick={()=>handleNavLinkClick(item.id)}>{category.name}</NavLink> 
                </MenuItem>
              ))}
            </Menu>
          )}
        </Box>
      ))}
    </List>
  );
};

export default ListItems;