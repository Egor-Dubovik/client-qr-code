import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Person2Icon from '@mui/icons-material/Person2';
import { ROUTES } from 'common/constant/navigaton';
import { NavLink } from 'react-router-dom';
import ReturnsDeopDown from 'components/ReturnsDeopDown';

const ProfileList = () => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Меню
        </ListSubheader>
      }
    >
      <NavLink to={ROUTES.PROFILE}>
        <ListItemButton>
          <ListItemIcon>
            <Person2Icon />
          </ListItemIcon>
          <ListItemText primary="Профиль" />
        </ListItemButton>
      </NavLink>

      <ReturnsDeopDown />
    </List>
  );
};

export default ProfileList;
