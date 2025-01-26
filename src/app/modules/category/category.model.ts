import { model, Schema } from 'mongoose'
import { TCategory } from './category.types'

const categorySchema = new Schema<TCategory>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
  },
)

export const Category = model<TCategory>('category', categorySchema)
