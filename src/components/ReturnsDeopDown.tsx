import React, { FC, useContext } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ROUTES } from 'common/constant/navigaton';
import { NavLink } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';

const ReturnsDeopDown: FC = observer(() => {
  const { userReturn } = useContext(Context);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Возвраты" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {userReturn.allReturns.map((currentRetern) => (
          <List key={currentRetern.reason} component="div" disablePadding>
            <NavLink to={ROUTES.MAIN}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={currentRetern.reason} />
              </ListItemButton>
            </NavLink>
          </List>
        ))}
      </Collapse>
    </>
  );
});

export default ReturnsDeopDown;
