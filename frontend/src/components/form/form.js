import { TextField, Typography, Button, Grid, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask } from '../../actions/tasks';


export default function Form({handleClose, currentId}) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const task = useSelector((state) => currentId ? state.tasks.find((t) => t._id === currentId) : null);

    const user = JSON.parse(localStorage.getItem('profile'));
    
    const [taskData, setTaskData] = useState({
        taskTitle: '',
        description: '',
        deadline: null
    }); 

    useEffect(() => {
        if(task) {
            setTaskData(task);
        };
    }, [task]);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        

        if(currentId){
            dispatch(updateTask(currentId, {...taskData, creator: user?.result?._id}));
            
        } else {
            dispatch(createTask({...taskData, creator: user?.result?._id}));
        }
       
        handleClose();
    }

    


    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <Grid container spacing={3} direction='column'>

                    <Grid item>
                        <Typography color='text.secondary' variant='h5'>{currentId ? 'Edit Task' : 'Create New Task'}</Typography>
                    </Grid>

                    <Grid className={classes.innerGrid} container direction='row' spacing={3}>
                        <Grid item>
                            <TextField 
                                value={taskData.taskTitle} 
                                name='taskTitle' 
                                autoFocus
                                required
                                className={classes.text} 
                                label='Task'
                                onChange={(e) => setTaskData({...taskData, taskTitle: e.target.value})}
                            />
                        </Grid>
                        <Grid item>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label='Deadline'
                                    minDate={new Date()}
                                    value={taskData.deadline}
                                    onChange={(e) => {
                                        setTaskData({...taskData, deadline: e.setHours(1,0,0,0)});
                                    }}
                                    renderInput={(params) => <TextField required className={classes.text2} fullWidth {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <TextField 
                            name='description' 
                            value={taskData.description} 
                            fullWidth 
                            multiline={true} 
                            rows={2} 
                            required
                            label='Description'
                            onChange={(e) => setTaskData({...taskData, description: e.target.value})}
                        />
                    </Grid>
                    
                    <Grid item>
                        <Button type='submit' className={classes.btn} variant='contained'>{currentId ? 'Save' : 'Add Task'}</Button>
                        <Button color='error' onClick={handleClose}>Cancel</Button>
                    </Grid>

                </Grid>
            </form>
        </Paper>
    )
}
