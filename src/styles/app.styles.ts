import { makeStyles } from '@mui/styles';

const useAppStyles = makeStyles({
  App: {
    positon: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    color: '#294270',
  },
  SpinerBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(50%,50%)',
  },
});

export default useAppStyles;
