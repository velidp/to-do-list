import React, { useRef } from 'react';
import { Paper, Popover } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WarningIcon from '@mui/icons-material/Warning';
import Form from '../form/form';
import SummarizeIcon from '@mui/icons-material/Summarize';

import useStyles from './styles';

export default function Panel({anchorEl, typeOfTask, handleClick, handleClose, open, setCurrentId, currentId, setTypeOfTask}) {

    const classes = useStyles();
    const containerRef = useRef();
    
    return (
     
        <Paper className={classes.paper} elevation={3} ref={containerRef}>
            <Tabs value={typeOfTask}>
                <Tab onClick={() => {setTypeOfTask(0)}} icon={<SummarizeIcon />} label='To Do' />
                <Tab onClick={() => {setTypeOfTask(1)}} icon={<FavoriteIcon />} label='Done' />
                <Tab onClick={() => {setTypeOfTask(2)}} icon={<WarningIcon />} label='Overdue' />
                <Tab disabled={(typeOfTask === 1 || typeOfTask === 2) ? true : false } onClick={handleClick} icon={<AddCircleIcon />} label='Add Task' />
            </Tabs>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorReference='none'
                container={containerRef.current}
                elevation={24}
                className={classes.popover}
            >
                <Form setCurrentId={setCurrentId} currentId={currentId} handleClose={handleClose}></Form>
            </Popover>

        </Paper>
            
    )
}
