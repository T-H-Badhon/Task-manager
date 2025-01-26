import { Router } from 'express'
import { categoryControllers } from './category.controllers'

const router = Router()

router.post('/add', categoryControllers.addCategory)

router.get('/', categoryControllers.getAllCategory)

export const categoryRoutes = router
