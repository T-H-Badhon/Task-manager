import httpStatus from "http-status"
import { AppError } from "../../errors/AppError"
import { TUser } from "../user/user.interface"
import { User } from "../user/user.model"
import { TLoginCredential, TTokenInfo } from "./auth.interface"
import jwt, { JwtPayload } from 'jsonwebtoken'
import { hashedPassword } from "../../utilities/hashPassword"
import { matchPassword } from "../../utilities/matchPassword"
import { config } from "../../config/config"


const userRegister = async (payload: TUser)=>{

        payload.password = await hashedPassword(payload.password)

        const userData = await User.create(payload)

        return userData

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

const getUserProfileByToken = async (token: string) => {

  try {
    const decoded = jwt.verify(
      token,
      config.access_secrate as string,
    ) as JwtPayload;

    const user = await User.findById(decoded._id);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
    }


 

    return {
      _id:user?._id,
      username:user?.username,
      email:user?.email
    };
  } catch (error) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized Access');
  }
};

export const authServices = {
    userLogin,
    userRegister,
    getUserProfileByToken
}