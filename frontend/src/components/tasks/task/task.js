import React, {useState} from 'react';
import {Paper, Grid, Typography, Button, IconButton, MenuItem, Menu } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import '../../../index.css';
import useStyles from './styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask, getToDoTasks, undoneTask, getDoneTasks } from '../../../actions/tasks';

const yesterday = new Date((new Date()).getTime() - (86400000)).setHours(1,0,0,0);
const today = new Date((new Date()).getTime()).setHours(1,0,0,0);

export default function Task({task, handleClick, setCurrentId}) {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [anchorElMenu, setAnchorElMenu] = useState(null);

    const [done, setDone] = useState(!task.done && (Date.parse(task.deadline) > (yesterday)));

    const [undone, setUndone] = useState(task.done);

    const [overdue, setOverdue] = useState(!task.done && (Date.parse(task.deadline) <= (yesterday)));

    
    const open = Boolean(anchorElMenu);

    const handleClickMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };

    const buttonClicked = () => {
        if(done) {
            dispatch(doneTask(task._id));
            setTimeout(() => dispatch(getToDoTasks()), 1000);
        } else {
            dispatch(undoneTask(task._id));
            setTimeout(() => dispatch(getDoneTasks()), 1000);
        }
    
    }    

    const handleCloseMenu = () => {
        setAnchorElMenu(null);
    };

    return (
        <Paper className={classes.paper} elevation={3} >
            <Grid container direction='column' spacing={2} justifyItems='center' >
                <Grid item>
                    <div className={classes.div}>
                        <Typography noWrap variant='h5'>
                          <span className={classes.header}>
                            <span className={classes.span}>{task.taskTitle}</span>
                            <div>
                              <IconButton
                                  id='button'
                                  aria-controls={open ? 'menu' : undefined}
                                  aria-haspopup='true'
                                  aria-expanded={open ? 'true' : undefined}
                                  onClick={handleClickMenu}
                              >
                                <MoreVertIcon />
                              </IconButton>
                              <Menu
                                  anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'right',
                                  }}
                                  transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'right',
                                  }}
                                  id='menu'
                                  MenuListProps={{
                                      'aria-labelledby': 'button',
                                  }}
                                  anchorEl={anchorElMenu}
                                  open={open}
                                  onClose={handleCloseMenu}
                              >
                                <MenuItem onClick={(e) => {handleCloseMenu(); handleClick(e); setCurrentId(task._id)}} disableRipple>
                                  
                                    <EditIcon className={classes.icon} color='action' />
                                    <Typography color='text.secondary' noWrap variant='body'>
                                      Edit
                                    </Typography>
                                  
                                </MenuItem>
                                <MenuItem onClick={() => {handleCloseMenu(); dispatch(deleteTask(task._id))}} disableRipple>
                                  
                                    <DeleteIcon className={classes.icon} color='action' />
                                    <Typography color='text.secondary' noWrap variant='body'>
                                      Delete
                                    </Typography>
                                  
                                </MenuItem>
                              </Menu>
                            </div>
                          </span>
                        </Typography>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classes.divDesc}>
                        <Typography color='text.secondary' noWrap variant='body'>
                          {task.description}
                        </Typography>
                    </div>
                </Grid>
                <Grid item>
                    <Typography>
                        <span className={classes.date}>
                          <EventIcon color='action' className={classes.icon} />
                          {task.deadline.split('T')[0]}
                        </span>
                    </Typography>
                </Grid>
                <Grid item>
                    <Button disabled={overdue} onClick={buttonClicked} color={done ? 'success' : 'secondary'} variant='contained'>
                        <CheckCircleOutlineIcon className={classes.icon} />
                            { overdue ? 'Overdue' : null }
                            { done ? 'Done' : null }
                            { undone ? 'Undone' : null }
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
