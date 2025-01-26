import { Router } from 'express'
import { productControllers } from './product.controllers'

const router = Router()

router.post('/add', productControllers.addProduct)

router.get('/', productControllers.getAllProduct)

router.put('/update/:id', productControllers.updateProduct)

router.delete('/delete/:id', productControllers.deleteProduct)

export const productRoutes = router
