import { Router } from 'express'
import { categoryRoutes } from '../modules/category/category.routes'
import { productRoutes } from '../modules/products/product.routes'

const router = Router()

const moduleRoutes = [
  {
    path: '/category',
    route: categoryRoutes,
  },
  {
    path: '/product',
    route: productRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
