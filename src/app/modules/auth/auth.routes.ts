import { Router } from 'express'
import { authControllers } from './auth.controllers'

const router = Router()

router.post("/register", authControllers.userRegister)
router.post("/login", authControllers.userLogin)


export const authRoutes = router