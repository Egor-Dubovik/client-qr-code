import { makeStyles } from '@mui/styles';

const useScStyle = makeStyles({
  Scaner: {
    position: 'static',
  },
  qrReader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  spiner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
  },
});

export default useScStyle;
