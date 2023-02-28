import { makeStyles } from '@mui/styles';

const useLinkStyles = makeStyles({
  Link: {
    padding: '0 8px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&.active': {
      textDecoration: 'underline',
    },
  },
  NavLink: {
    color: '#fff',
  },
  BurgerLink: {
    color: '#000',
  },
});

export default useLinkStyles;
