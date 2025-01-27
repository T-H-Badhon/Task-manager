import { Types } from "mongoose";

export type TTask= {
    title: string;
    userId:Types.ObjectId;
    description: string;
    dueDate: Date;
    status: "complete" | "incomplete"
}