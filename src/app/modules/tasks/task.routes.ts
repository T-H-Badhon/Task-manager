import { Router } from 'express'
import { taskControllers } from './task.controllers'

const router = Router()

router.post("/add-task", taskControllers.addTask)

router.get("/", taskControllers.allTasks)

router.get("/my-tasks", taskControllers.myTasks)

router.get("/:id", taskControllers.singleTask)

router.put("/update-task/:id", taskControllers.updateTask)

router.delete("/delete/:id", taskControllers.deleteTask)


export const taskRoutes = router