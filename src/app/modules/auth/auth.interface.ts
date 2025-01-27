import { Types } from "mongoose"

 export type TLoginCredential ={
    email:string,
    password:string
 }

 export type TTokenInfo ={
    _id: Types.ObjectId;
    username:string;
    email:string
 }