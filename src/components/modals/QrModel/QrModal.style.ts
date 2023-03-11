import { makeStyles } from '@mui/styles';

const useQrModalStyles = makeStyles({
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '300px',
    height: '300px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#262626',
  },
  qrCode: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default useQrModalStyles;
