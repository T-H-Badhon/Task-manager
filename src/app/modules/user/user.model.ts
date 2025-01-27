import mongoose, { Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
    username:{
        type:String,
        required:[true, "Username is required."],
        unique: true
    },
    email:{
        type:String,
        required:[true, "Email is required."],
        unique: true
    },
    password:{
        type:String,
        required:[true, "Password is required."]
    },
},{
    timestamps: true
})


export const User = mongoose.model('User', userSchema)