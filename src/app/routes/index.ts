import { Router } from 'express'
import { productRoutes } from '../modules/products/product.routes'
import { authRoutes } from '../modules/auth/auth.routes'
import { taskRoutes } from '../modules/tasks/task.routes'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: productRoutes,
  },
  {
    path: '/tasks',
    route: taskRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
