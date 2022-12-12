import React, { useState, useEffect } from 'react';
import { Grid, Link, Typography } from '@mui/material';
import Panel from '../panel/panel';
import Tasks from '../tasks/tasks';
import { useDispatch } from 'react-redux';
import { getToDoTasks, getDoneTasks, getOverdueTasks } from '../../actions/tasks';
import useStyles from './styles';

import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [currentId, setCurrentId] = useState(null);

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const user = JSON.parse(localStorage.getItem('profile'));

    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

  
    const handleClose = () => {
        setAnchorEl(null);
        setTimeout(() => setCurrentId(null), 500);
    };
    
    const open = Boolean(anchorEl);

    const [typeOfTask, setTypeOfTask] = useState(0);
    
    const dispatch = useDispatch();

    useEffect(() => {

      if(user) {
        switch (typeOfTask) {
          case 0:
            dispatch(getToDoTasks());
            break;
          case 1:
            dispatch(getDoneTasks());
            break;
          case 2:
            dispatch(getOverdueTasks());
            break;
          default:
            break;
        }
      }
    }, [dispatch, typeOfTask]);


    if(user?.result?.name) {
         return (
          <Grid
            container
            direction='column'
            justifyContent='flex-start'
            alignItems='center'
          >

            <Grid item>
              <Panel typeOfTask={typeOfTask} setTypeOfTask={setTypeOfTask} currentId={currentId} setCurrentId={setCurrentId} anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose} open={open}></Panel>
            </Grid>

            <Grid item>
              <Tasks setCurrentId={setCurrentId} handleClick={handleClick}></Tasks>
            </Grid> 

          </Grid>
          );
        } else {return (
            <Typography className={classes.redirection}>You are not logged in. Go to &nbsp; <Link className={classes.link} onClick={() => {navigate('/')}}>Log In Page</Link></Typography>
        )}
}
