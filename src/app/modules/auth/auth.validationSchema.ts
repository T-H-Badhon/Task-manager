import { z } from 'zod'

const registerUser = z.object({
  body: z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
  }),
})

const loginUser = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
})


export const authValidation = {
    registerUser,
    loginUser
}