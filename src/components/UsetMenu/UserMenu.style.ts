import { makeStyles } from '@mui/styles';

const useUserMenuStyles = makeStyles({
  MenuLink: {
    padding: '5px 0',
    color: '#000',
    textDecoration: 'none',
  },
  MenuItem: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default useUserMenuStyles;
