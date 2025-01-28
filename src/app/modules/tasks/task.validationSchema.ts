import { z } from 'zod'

const createTask = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    dueDate: z.string(),
  }),
})

const updateTask = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    dueDate: z.string().optional(),
    status:z.enum(["complete", "incomplete"]).optional()
  }),
})

export const taskValidation = {
  createTask,
  updateTask
}