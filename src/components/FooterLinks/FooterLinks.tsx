import React from 'react';
import { Link, List, ListItem, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import useFooterLinksStyles from './FooterLinks.style';

const FooterLinks = (): JSX.Element => {
  const classes = useFooterLinksStyles();

  return (
    <List className={classes.LinksList}>
      <ListItem className={classes.ListItem} sx={{ width: 'auto' }}>
        <Typography sx={{ mr: 1 }}>Разработчик:</Typography>
        <Link target="_blank" href="https://t.me/ego_dubovik">
          <TelegramIcon />
        </Link>
      </ListItem>
    </List>
  );
};

export default FooterLinks;
