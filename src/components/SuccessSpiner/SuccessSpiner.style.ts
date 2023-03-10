import { makeStyles } from '@mui/styles';

const useSuccessSpinerStyles = makeStyles({
  successCheckmark: {
    width: '80px',
    height: '115p',
    margin: '0 auto',
  },
  checkIcon: {
    position: 'relative',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    boxSizing: 'content-box',
  },
  iconLine: {
    height: '5px',
    backgroundColor: '#4CAF50',
    display: 'block',
    borderRadius: '2px',
    position: 'absolute',
    zIndex: 10,
  },
  lineTip: {
    top: '46px',
    left: '14px',
    width: '25px',
    transform: 'rotate(45deg)',
    animation: '$iconLineTip 0.75s',
  },
  lineLong: {
    top: '38px',
    right: '8px',
    width: '47px',
    transform: 'rotate(-45deg)',
    animation: '$iconLineLong 0.75s',
  },
  iconCircle: {
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    boxSizing: 'content-box',
    border: '4px solid #4CAF50',
    animation: '$rotateCircle 4.25s ease-in',
  },

  '@keyframes iconLineTip': {
    '0%': {
      width: 0,
      left: '1px',
      top: '19px',
    },
    '54%': {
      width: 0,
      left: '1px',
      top: '19px',
    },
    '70%': {
      width: '50px',
      left: '-8px',
      top: '37px',
    },
    '84%': {
      width: '17px',
      left: '21px',
      top: '48px',
    },
    '100%': {
      width: '25px',
      left: '14px',
      top: '45px',
    },
  },
  '@keyframes iconLineLong': {
    '0%': {
      width: 0,
      right: '46px',
      top: '54px',
    },
    '65%': {
      width: 0,
      right: '46px',
      top: '54px',
    },
    '84%': {
      width: '55px',
      right: '0px',
      top: '35px',
    },
    '100%': {
      width: '47px',
      right: '8px',
      top: '38px',
    },
  },
  '@keyframes rotateCircle': {
    '0%': {
      opacity: 0,
    },
    '12%': {
      opacity: 0.8,
    },
    '100%': {
      opacity: 1,
    },
  },
});

export default useSuccessSpinerStyles;
