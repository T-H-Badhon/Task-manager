import mongoose, { Schema } from "mongoose";
import { TTask } from "./task.interface";


const taskSchema = new Schema<TTask>({
    title:{
        type:String,
        required: [true, "title is required."]
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    description:{
        type:String,
    },
    dueDate:{
        type: Date
    },
    status:{
        type: String,
        enum: ['complete', 'incomplete'],
        default:"incomplete"
    }
},
{
    timestamps:true
})

export const Task = mongoose.model('Task', taskSchema)