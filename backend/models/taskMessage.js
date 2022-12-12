import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
    {
        taskTitle: String,
        description: String,
        creator: String,
        deadline: Date,
        done: {
            type: Boolean,
            default: false
        }
    }
);

const TaskMessage = mongoose.model('TaskMessage', taskSchema);

export default TaskMessage;