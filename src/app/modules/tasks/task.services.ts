/* eslint-disable @typescript-eslint/no-explicit-any */

import { queryFilter } from '../../middlewares/queryBuilder'
import { Types } from 'mongoose'

const addTask = async (payload: any) => {
  

  return payload
}

const allTasks = async (query: Record<string, unknown>) => {


  return query
}

const singleTask = async (id: string) => {

  return id
}

const myTasks = async (id: string, query: Record<string, unknown>) => {

  return id
}

const updateTask = async (
  userId: Types.ObjectId,
  taskId: string,
  payload: any,
) => {


  return userId
}

const deleteTask = async (userId: string, taskId: string) => {


  return userId
}

export const taskServices = {
  addTask,
  allTasks,
  singleTask,
  myTasks,
  updateTask,
  deleteTask,
}