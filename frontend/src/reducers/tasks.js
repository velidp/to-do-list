import { CREATE, UPDATE, DELETE, FETCH_TODO_TASKS, DONE, FETCH_DONE_TASKS, FETCH_OVERDUE_TASKS, UNDONE } from '../constants/actionTypes';

export default (tasks = [], action) => {
    switch (action.type) {
        case FETCH_TODO_TASKS:
            return action.payload;
        case FETCH_DONE_TASKS:
            return action.payload;
        case FETCH_OVERDUE_TASKS:
            return action.payload;
        case CREATE:
            return [...tasks, action.payload];
        case UPDATE:
        case DONE:
        case UNDONE:
            return tasks.map((task) => task._id === action.payload._id ? action.payload : task);
        case DELETE:
            return tasks.filter((task) => task._id !== action.payload )
        default:
            return tasks;
    }
}