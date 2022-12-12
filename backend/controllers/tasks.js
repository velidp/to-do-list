import mongoose from 'mongoose';
import TaskMessage from '../models/taskMessage.js';



export const getToDoTasks = async (req, res) => {
    try {
        const taskMessages = await TaskMessage.find({done: false, deadline: {$gte: (new Date((new Date()).getTime() - (86400000)))}});
        res.status(200).json(taskMessages);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const getDoneTasks = async (req, res) => {
    try {
        const taskMessages = await TaskMessage.find({done: true});
        res.status(200).json(taskMessages);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const getOverdueTasks = async (req, res) => {
    try {
        const taskMessages = await TaskMessage.find({deadline: {$lte: (new Date((new Date()).getTime() - (86400000)))}, done: false});
        res.status(200).json(taskMessages);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const createTask = async (req, res) => {

    const task = req.body;

    const newTask = new TaskMessage({...task, creator: req.userId});

    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateTask = async (req, res) => {

    const { id: _id } = req.params;

    const task = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No task with that id');

    const updatedTask = await TaskMessage.findByIdAndUpdate(_id, task, {new: true});

    res.json(updatedTask);
}

export const deleteTask = async (req, res) => {


    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No task with that id');

    await TaskMessage.findByIdAndRemove(id);

    res.json({ message: 'Task Deleted' });

}


export const doneTask = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No task with that id');


    const updatedTask = await TaskMessage.findByIdAndUpdate(id, { done: true}, { new: true }); 

    res.json(updatedTask);
}


export const undoneTask = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No task with that id');


    const updatedTask = await TaskMessage.findByIdAndUpdate(id, { done: false}, { new: true }); 

    res.json(updatedTask);
}