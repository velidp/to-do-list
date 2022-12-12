import { makeStyles } from '@mui/styles';
import { breakpoints } from '@mui/system';


const useStyles = makeStyles({
    paper: {
        margin: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 3,
        paddingBottom: 3,
        width: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popover: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 74,
    }
});

export default useStyles;
