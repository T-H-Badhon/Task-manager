import { Router } from 'express'
import { authControllers } from './auth.controllers'
import validate from '../../middlewares/ValidationFunction'
import { authValidation } from './auth.validationSchema'

const router = Router()

router.post("/register",validate(authValidation.registerUser), authControllers.userRegister)
router.post("/login", validate(authValidation.loginUser), authControllers.userLogin)


export const authRoutes = router