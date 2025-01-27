import catchAsync from '../../utilities/catchAsync'
import { Request, Response } from 'express'
import response from '../../utilities/response'
import { taskServices } from './task.services'

const addTask = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body
  const result = await taskServices.addTask(payload)

  response(res, {
    success: true,
    statusCode: 201,
    message: 'Task added successfully',
    data: result,
  })
})

const allTasks = catchAsync(async (req: Request, res: Response) => {
  const query = req.query

  const result = await taskServices.allTasks(query)
  response(res, {
    success: true,
    statusCode: 200,
    message: 'Tasks fetched successful',
    data: result,
  })
})

const singleTask = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.taskId

  const result = await taskServices.singleTask(id)
  response(res, {
    success: true,
    statusCode: 200,
    message: 'Task fetched successful',
    data: result,
  })
})

const myTasks = catchAsync(async (req: Request, res: Response) => {
  const query = req.query

  const id = req.user._id

  const result = await taskServices.myTasks(id, query)
  response(res, {
    success: true,
    statusCode: 200,
    message: 'Tasks fetched successful',
    data: result,
  })
})

const updateTask = catchAsync(async (req: Request, res: Response) => {
  const taskId = req.params.taskId
  const userId = req.user._id

  const payload = req.body

  const result = await taskServices.updateTask(userId, taskId, payload)
  response(res, {
    success: true,
    statusCode: 200,
    message: 'Task updated successful',
    data: result,
  })
})
const deleteTask = catchAsync(async (req: Request, res: Response) => {
  const taskId = req.params.taskId

  const userId = req.user._id

  const result = await taskServices.deleteTask(userId, taskId)
  response(res, {
    success: true,
    statusCode: 200,
    message: 'Task deleted successful',
    data: result,
  })
})

export const taskControllers = {
  addTask,
  allTasks,
  singleTask,
  myTasks,
  updateTask,
  deleteTask,
}