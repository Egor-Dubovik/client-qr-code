import React, { FC, useContext } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';
import useReturns from 'hooks/returns/useReturns';
import { Return } from 'common/models/Return';

const ReturnsDeopDown: FC = observer(() => {
  const { userReturn, profile } = useContext(Context);
  const [open, setOpen] = React.useState(true);
  const { userReturns, isLoading, error } = useReturns();

  const handleClick = () => {
    setOpen(!open);
  };

  const openRuturn = (returnInfo: Return) => {
    userReturn.setReturn(returnInfo);
    profile.setIsOpen(false);
  };

  return (
    <>
      <ListItemButton sx={{ bgcolor: '#f7f7f7' }} onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Возвраты" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {userReturns &&
          userReturns.map((currentReturn) => (
            <List key={currentReturn.id} component="div" disablePadding>
              <ListItemButton onClick={() => openRuturn(currentReturn)} sx={{ pl: 4 }}>
                <ListItemText primary={currentReturn.reason} />
              </ListItemButton>
            </List>
          ))}
      </Collapse>
    </>
  );
});

export default ReturnsDeopDown;
