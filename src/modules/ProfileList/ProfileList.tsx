import React, { useContext } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Person2Icon from '@mui/icons-material/Person2';
import ReturnsDeopDown from 'components/ReturnsDeopDown';
import { Context } from 'index';

const ProfileList = (): JSX.Element => {
  const { profile } = useContext(Context);

  const openProfile = (): void => {
    profile.setIsOpen(true);
  };

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
      <ListItemButton onClick={openProfile}>
        <ListItemIcon>
          <Person2Icon />
        </ListItemIcon>
        <ListItemText primary="Профиль" />
      </ListItemButton>

      <ReturnsDeopDown />
    </List>
  );
};

export default ProfileList;
