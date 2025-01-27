import httpStatus from "http-status"
import { AppError } from "../../errors/AppError"
import { TUser } from "../user/user.interface"
import { User } from "../user/user.model"
import { TLoginCredential, TTokenInfo } from "./auth.interface"
import jwt from 'jsonwebtoken'
import { hashedPassword } from "../../utilities/hashPassword"
import { matchPassword } from "../../utilities/matchPassword"
import { config } from "../../config/config"


const userRegister = async (payload: TUser)=>{

    try{
        payload.password = await hashedPassword(payload.password)

        const userData = await User.create(payload)

        return userData
    }catch(err){
        console.log(err)
    }

}

const userLogin = async (payload:TLoginCredential)=>{

    const { email, password } = payload

    const loginUser = await User.findOne({ email }).select('+password')
  
    if (loginUser) {
      const isMatched = await matchPassword(password, loginUser.password)
  
      if (!isMatched) {
        throw new AppError(httpStatus.FORBIDDEN, 'password not matched')
      }
  
      const tokenInfo: TTokenInfo = {
        _id: loginUser._id,
        username: loginUser.username,
        email: loginUser.email,
      }
      const token = jwt.sign(tokenInfo, config.access_secrate as string, {
        expiresIn: '1h',
      })
  
      const result = {
        user:loginUser,
        token,
      }
  
      return result
    } else {
      throw new AppError(httpStatus.NOT_FOUND, 'user not found')
    }
}

export const authServices = {
    userLogin,
    userRegister
}