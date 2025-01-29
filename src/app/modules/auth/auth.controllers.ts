import catchAsync from '../../utilities/catchAsync'
import { Request, Response } from 'express'
import response from '../../utilities/response'
import { authServices } from './auth.services'
import httpStatus from 'http-status'

const userRegister = catchAsync(async(req:Request, res:Response)=>{
    const payload = req.body

    const result = await authServices.userRegister(payload)

    response(res, {
        success:true,
        statusCode: 200,
        message: "Registration Successfull!.",
        data: result
    })
})

const userLogin = catchAsync(async(req : Request , res: Response)=>{
    const payload = req.body

    const result = await authServices.userLogin(payload)

    response (res, {
        success:true,
        statusCode: 200,
        message: " Login Successfull!",
        data: result
    })
})
const getUserProfileByToken = catchAsync(async (req, res) => {
    const token = req.headers.authorization
  
    const result = await authServices.getUserProfileByToken(token || '');
    response(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: '',
      data: result,
    });
  });

export const authControllers = {
  userRegister,
  userLogin,
  getUserProfileByToken
}