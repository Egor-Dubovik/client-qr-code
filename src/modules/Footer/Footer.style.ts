import { makeStyles } from '@mui/styles';

const useFooterStyles = makeStyles({
  container: {
    display: 'flex',
    columnGap: '25px',
    padding: '15px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export default useFooterStyles;
