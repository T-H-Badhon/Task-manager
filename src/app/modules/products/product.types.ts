import { Types } from 'mongoose'

export type TProduct = {
  category?: Types.ObjectId
  material: number
  barcode: string
  description: string
}
