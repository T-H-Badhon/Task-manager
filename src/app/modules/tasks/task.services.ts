/* eslint-disable @typescript-eslint/no-explicit-any */

// import { queryFilter } from '../../middlewares/queryBuilder'
import { Types } from 'mongoose'
import { Task } from './task.model'
import { AppError } from '../../errors/AppError'
import httpStatus from 'http-status'

const addTask = async (id:Types.ObjectId,payload: any) => {

    const result = await Task.create({userId: id, ...payload})

    return result
}

const allTasks = async (query: Record<string, unknown>) => {
 
  const result = await Task.find(query)

  return result
}

const singleTask = async (id: string) => {
    const result = Task.findOne({_id:id})

    return result
}

const myTasks = async (id: string, query: Record<string, unknown>) => {
    const queryData = { userId:id ,...query}

    console.log(queryData)

    const result = await Task.find(queryData)

    return result
}

const updateTask = async (
  userId: Types.ObjectId,
  taskId: string,
  payload: any,
) => {
  const currentData = await Task.findOne({_id:taskId})

  if(currentData?.userId != userId){
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized to update this task.")
  }

  try{

    await Task.findOneAndUpdate({_id:currentData?._id}, payload)

    return
  }catch(err){
    console.log(err)
  }
}

const deleteTask = async (userId: Types.ObjectId, taskId: string) => {
  const taskData = await Task.findOne({_id:taskId})

  if(taskData?.userId != userId){
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized to delete this task.")
  }

  const result = await Task.deleteOne({_id:taskData?._id})

  if(result?.deletedCount!=1){
    throw new AppError(httpStatus.FAILED_DEPENDENCY, "Failed to delete task!")
  }

  return

}

export const taskServices = {
  addTask,
  allTasks,
  singleTask,
  myTasks,
  updateTask,
  deleteTask,
}
