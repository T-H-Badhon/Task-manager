import { Router } from 'express'
import { taskControllers } from './task.controllers'
import validate from '../../middlewares/ValidationFunction'
import auth from '../../middlewares/auth'
import { taskValidation } from './task.validationSchema'

const router = Router()

router.post("/add-task",auth(),validate(taskValidation.createTask), taskControllers.addTask)

router.get("/", taskControllers.allTasks)

router.get("/my-tasks",auth(), taskControllers.myTasks)

router.get("/:taskId",auth(), taskControllers.singleTask)

router.put("/update-task/:taskId",auth(), validate(taskValidation.updateTask), taskControllers.updateTask)

router.delete("/delete/:taskId",auth(), taskControllers.deleteTask)


export const taskRoutes = router