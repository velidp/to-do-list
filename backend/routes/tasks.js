import express from 'express';
import { createTask, updateTask, deleteTask, doneTask, getToDoTasks, getDoneTasks, getOverdueTasks, undoneTask } from '../controllers/tasks.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/todo-tasks', auth, getToDoTasks);
router.get('/overdue-tasks', auth, getOverdueTasks);
router.get('/done-tasks', auth, getDoneTasks);
router.post('/', auth, createTask);
router.patch('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);
router.patch('/:id/done', auth, doneTask);
router.patch('/:id/undone', auth, undoneTask)


export default router;