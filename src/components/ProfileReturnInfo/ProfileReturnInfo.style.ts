import { makeStyles } from '@mui/styles';

const useProfileReturnStyles = makeStyles({
  BoxInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  span: {
    fontSize: 18,
    color: 'rgba(10,10,10, 70%)',
  },
  DeleteBox: {
    position: 'absolute',
    top: '40%',
    left: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      position: 'static',
    },
  },
});

export default useProfileReturnStyles;
