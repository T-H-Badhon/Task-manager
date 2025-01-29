import { Router } from 'express'
import { authControllers } from './auth.controllers'
import validate from '../../middlewares/ValidationFunction'
import { authValidation } from './auth.validationSchema'
import auth from '../../middlewares/auth'

const router = Router()

router.post("/register",validate(authValidation.registerUser), authControllers.userRegister)
router.post("/login", validate(authValidation.loginUser), authControllers.userLogin)
router.post("/profile-by-token", auth(), authControllers.getUserProfileByToken)


export const authRoutes = router