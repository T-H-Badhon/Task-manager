import { Router } from 'express'
import { authRoutes } from '../modules/auth/auth.routes'
import { taskRoutes } from '../modules/tasks/task.routes'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  // {
  //   path: '/user',
  //   route: ,
  // },
  {
    path: '/task',
    route: taskRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
