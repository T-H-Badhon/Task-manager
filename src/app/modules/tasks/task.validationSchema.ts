import { z } from 'zod'

const createTask = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    status:z.enum(["complete", "incomplete"])
  }),
})

const updateTask = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.string().optional(),
    status:z.enum(["complete", "incomplete"]).optional()
  }),
})

export const taskValidation = {
  createTask,
  updateTask
}