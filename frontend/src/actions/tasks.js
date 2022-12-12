import * as api from '../api';
import { CREATE, UPDATE, DELETE, FETCH_TODO_TASKS, DONE, FETCH_OVERDUE_TASKS, FETCH_DONE_TASKS, UNDONE } from '../constants/actionTypes';

export const getToDoTasks = () => async (dispatch) => {

    try {
        const { data } = await api.fetchToDoTasks();
        dispatch({type: FETCH_TODO_TASKS, payload: data}); 
    } catch (error) {
        console.log(error.message);
    }

}

export const getDoneTasks = () => async (dispatch) => {

    try {
        const { data } = await api.fetchDoneTasks();
        dispatch({type: FETCH_DONE_TASKS, payload: data}); 
    } catch (error) {
        console.log(error.message);
    }

}

export const getOverdueTasks = () => async (dispatch) => {

    try {
        const { data } = await api.fetchOverdueTasks();
        dispatch({type: FETCH_OVERDUE_TASKS, payload: data}); 
    } catch (error) {
        console.log(error.message);
    }

}

export const createTask = (task) => async (dispatch) => {
    try {
        const { data } = await api.createTask(task);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = (id, task) => async (dispatch) => {
    try {
        const { data } = await api.updateTask(id, task);
        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        await api.deleteTask(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const doneTask = (id) => async (dispatch) => {
    try {
        const { data } = await api.doneTask(id);
        dispatch({type: DONE, payload: data});
    } catch (error) {
        console.log(error);
    }
}


export const undoneTask = (id) => async (dispatch) => {
    try {
        const { data } = await api.undoneTask(id);
        dispatch({type: UNDONE, payload: data});
    } catch (error) {
        console.log(error);
    }
}