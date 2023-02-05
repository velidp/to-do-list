import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Avatar, Grid } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';


export default function Header() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        setUser(null);
    }


    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token); 

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <Box sx={{ flexGrow: 1 }} style={{ minWidth: location.pathname === '/home' || (location.pathname === '/' && user) ? 750 : null }}>
            <AppBar sx={{ bgcolor: '#34568b' }} position='static'>
                <Toolbar>
                    <FactCheckIcon sx={{ mr: 2 }} />
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>To Do List</Typography>
                    
                    {
                        user ? (
                            <div>
                                <Grid spacing={2} container direction='row'>

                                    <Grid item>
                                        <Avatar alt={user.result?.name} src={user.result?.imageUrl}>{user.result?.name.charAt(0)}</Avatar>
                                    </Grid>

                                    <Grid item style={{marginTop: 8}}>
                                        <Typography variant='body'>{user.result?.name}</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Button color='inherit' onClick={logout}>Logout</Button>
                                    </Grid>
                                    
                                </Grid>
                            </div>
                        ) : (null)
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}
