import { makeStyles } from '@mui/styles';

const useScannerFrameStyle = makeStyles({
  ScanerSvgBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 300,
    height: 300,
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
  },
  ScanerSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    fill: 'none',
    stroke: '#f0b51b',
    strokeWidth: 4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    boxShadow: '0 -1px 0 #ffffff21, 0 0 6px #ffffff21, 0 1px 1px #ffffff21',
    borderRadius: 20,
    padding: 2,
  },
  ScanerPlate: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 0%)',
    display: 'block',
    width: 215,
    height: 4,
    background: '#e4b312',
    borderRadius: 20,
    transition: 'all .2s linear',
    animation: `$scaner 3s linear infinite`,
    boxShadow: '0 0 30px 5px #e4b312',
  },
  '@keyframes scaner': {
    '0%': {
      top: '100%',
    },
    '50%': {
      top: 0,
    },
    '100%': {
      top: '100%',
    },
  },
});

export default useScannerFrameStyle;
