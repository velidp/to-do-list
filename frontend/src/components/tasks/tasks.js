import React from 'react';
import Task from './task/task';
import { useSelector } from 'react-redux'; 
import { Grid, Typography, LinearProgress } from '@mui/material';
import useStyles from './styles';

export default function Tasks({handleClick, setCurrentId}) {

    const tasks = useSelector((state) => state.tasks);
    const classes = useStyles();

    const user = JSON.parse(localStorage.getItem('profile'));
    const taksksReduced = tasks.filter(task => (task?.creator === user?.result?._id || task?.creator === user?.result?.googleId));

    return (
        <div>
        {(() => {
            if(!taksksReduced.length) { 
              return (
                  <>
                      <LinearProgress />
                      <br></br>
                      <Typography color='GrayText' variant='h6'>No tasks found</Typography>
                  </>
              )
            } else {
                return (
                    taksksReduced.slice(0).reverse().map((task) => (
                        <Grid key={task._id} item>
                            <Task setCurrentId={setCurrentId} task={task} handleClick={handleClick}></Task>
                        </Grid>
                    ))
              )
              
            }
      })()}


        {/*
        !taksksReduced.length ? <Typography color='text.secondary' className={classes.typography} variant='h6'>You don't have tasks in this category</Typography> : (
            <Grid container direction='column' >

                {
                    taksksReduced.slice(0).reverse().map((task) => (
                        <Grid key={task._id} item>
                            <Task setCurrentId={setCurrentId} task={task} handleClick={handleClick}></Task>
                        </Grid>
                    ))
                }

            </Grid>
        ) 
            */}

        </div>
    )
}
