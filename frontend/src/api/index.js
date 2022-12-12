import axios from 'axios';

const API = axios.create({ baseURL: 'https://to-do-list-vp.herokuapp.com' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchToDoTasks = () => API.get(`/tasks/todo-tasks`);
export const fetchDoneTasks = () => API.get(`/tasks/done-tasks`);
export const fetchOverdueTasks = () => API.get(`/tasks/overdue-tasks`);
export const createTask = (newTask) => API.post(`/tasks`, newTask); 
export const updateTask = (id, updatedTask) => API.patch(`/tasks/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const doneTask = (id) => API.patch(`/tasks/${id}/done`);
export const undoneTask = (id) => API.patch(`/tasks/${id}/undone`);


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);