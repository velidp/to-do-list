import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    date: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    paper: {
      padding: 15,
      margin: 10,
    },
    icon: {
      marginRight: 15
    },
    div: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'inline-block',
    },
    divDesc: {
      width: 700,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    span: {
        width: 650,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'inline-block',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
});

export default useStyles;
