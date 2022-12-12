import { Paper, Button, Grid, Avatar, TextField, Typography, Link } from '@mui/material';
import { GoogleLogin } from 'react-google-login';
import React, { useState } from 'react';
import useStyles from '../auth/styles';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from 'react-redux';
import Icon from './icon';
import { useNavigate } from 'react-router-dom';
import { signin, signup} from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

export default function Auth() {

    const classes = useStyles();

    const [wrongPassword, setWrongPassword] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const [userAlreadyExists, setUserAlreadyExists] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('profile'));

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {

        e.preventDefault();

        if(formData.password === formData.confirmPassword && isSignUp){
            setPasswordMatch(true);
        }
        else if(formData.password !== formData.confirmPassword && isSignUp){
            setPasswordMatch(false);
        }
        
        if(isSignUp){
            dispatch(signup(formData, navigate, setUserAlreadyExists));
        } 
        else {
            dispatch(signin(formData, navigate, setWrongPassword));
        }

    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const [isSignUp, setIsSignUp] = useState(false);

    const switchMode = () => {
        document.getElementById('form').reset();
        setWrongPassword(false);
        setPasswordMatch(true);
        setUserAlreadyExists(false);
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH' , data: { result, token }});
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = () => {
        console.log('Failuere');
    };

    if(!user?.result?.name) {
    return (
        <div className={classes.mainDiv}>
            <Paper elevation={3} className={classes.paper}>

                <Grid className={classes.grid} container direction='column' spacing={2}>

                    <Grid item >
                        <Avatar>
                            <LockIcon/>
                        </Avatar>
                    </Grid>

                    <form id='form' className={classes.form} onSubmit={handleSubmit}>
                        <Grid className={classes.grid} container direction='column' spacing={2}>
                            
                            { isSignUp && (
                                <Grid className={classes.gridInner} container direction='row' spacing={2}>
                                    <Grid className={classes.grid2} item>
                                        <TextField required onChange={handleChange} name='firstName' className={classes.text2} label='First Name' autoFocus />
                                    </Grid>

                                    <Grid item>
                                        <TextField required onChange={handleChange} name='lastName' className={classes.text2} label='Last Name' />
                                    </Grid>
                                </Grid>
                            )}

                            <Grid item>
                                <TextField required onChange={handleChange} name='email' autoFocus className={classes.text} label='Email Adress'/>
                                {isSignUp && userAlreadyExists && passwordMatch ? <Typography className={classes.wrongPass} variant='caption'>User already exist !</Typography> : null}
                            </Grid>

                            <Grid item>
                                <TextField required onChange={handleChange} name='password' className={classes.text} type='password' label='Password'/>
                                {!isSignUp && wrongPassword ? <Typography className={classes.wrongPass} variant='caption'>Wrong Password or Email</Typography> : null}
                            </Grid>

                            { isSignUp && (
                                <Grid item>
                                    <TextField required onChange={handleChange} name='confirmPassword' className={classes.text} type='password' label='Repeat Password' />
                                    {isSignUp && !passwordMatch ? <Typography className={classes.wrongPass} variant='caption'>Passwords must match !</Typography> : null}
                                </Grid>
                            )}

                        </Grid>

                        <Grid item className={classes.buttons}>
                            <Button color='secondary' fullWidth type='submit' variant='contained'>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                        </Grid>
                    
                        <Grid className={classes.buttons} item>
                            <GoogleLogin
                                clientId='902234398493-64brrhg7ttjogqu5vbrq8u9hmmdu8tof.apps.googleusercontent.com'
                                render = {(renderProps) => (
                                
                                    <Button
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        startIcon={<Icon/>}
                                        variant='contained'
                                        fullWidth
                                    >
                                        Google Sign In
                                    </Button>
                                    
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy='single_host_origin'
                            />
                        </Grid>

                        <Grid item className={classes.buttons}>
                            <Button fullWidth onClick={switchMode}>{isSignUp ? `Already have an account? Sign In` : `Don't have an account? Sign Up` }</Button>
                        </Grid>
                    </form>
                </Grid>
            
        </Paper>
      </div>
    )
    } else {
        return(
            <Typography className={classes.redirection}>You are already logged in. Go to &nbsp; <Link className={classes.link} onClick={() => {navigate('/home')}}>Home Page</Link></Typography>
        )
    }

}
