import { makeStyles } from '@mui/styles';

const useScanerDataStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 24px 0 24px',
    '@media (max-width: 768px)': {
      padding: '20px 24px 0 24px',
    },
  },
  title: {
    margin: '0 0 30px 0',
    fontSize: '24px',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      margin: '0 0 25px 0',
      fontSize: '18px',
    },
    '@media (max-width: 480px)': {
      fontSize: '16px',
    },
  },
  imageBox: {
    position: 'relative',
    width: 400,
    height: 400,
    marginBottom: 80,
    '@media (max-width: 992px)': {
      width: 300,
      height: 300,
      marginBottom: 60,
    },
    '@media (max-width: 768px)': {
      width: 250,
      height: 250,
      marginBottom: 30,
    },
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  fileLink: {
    margin: '15px 0',
  },
});

export default useScanerDataStyles;
