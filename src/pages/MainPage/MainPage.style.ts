import { makeStyles } from '@mui/styles';

const useMainPageStyles = makeStyles({
  section: {
    padding: '30px 0',
    '@media (max-width: 480px)': {
      padding: '20px 0',
    },
  },
  firstSection: {
    paddingTop: '30px',
    '@media (max-width: 480px)': {
      padding: '10px',
    },
  },
  createAcount: {
    backgroundColor: '#F7F8F9',
  },
  BoxContent: {
    display: 'flex',
    justifyContent: 'space-evenly',
    rowGap: 20,
    columnGap: 30,
    '@media (max-width: 992px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
  },
  typographyBox: {
    flex: '0 0 50%',
  },
  imageBox: {
    position: 'relative',
    flex: '0 0 35%',
    paddingBottom: '40%',
    '@media (max-width: 992px)': {
      width: '60%',
      paddingBottom: '65%',
    },
    '@media (max-width: 768px)': {
      width: '80%',
      paddingBottom: '80%',
    },
    '@media (max-width: 480px)': {
      width: '110%',
      paddingBottom: '100%',
    },
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  registrationContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 15px',
  },
  registrationBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 600,
    padding: '15px 30px',
    backgroundColor: '#51cfff14',
    border: '3px solid #1974d217',
    borderRadius: '10px',
    '@media (max-width: 480px)': {
      padding: '10px 15px',
    },
  },
  registrationLink: {
    textDecoration: 'none',
    color: '#1974D2',
  },
});

export default useMainPageStyles;
