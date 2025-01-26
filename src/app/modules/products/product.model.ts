import mongoose, { model, Schema } from 'mongoose'
import { TProduct } from './product.types'

const productSchema = new Schema<TProduct>(
  {
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      default: new mongoose.Types.ObjectId('673c4ea8b1ae17feb85e0454'),
      ref: 'category',
    },
    material: { type: Number, required: true },
    barcode: { type: String, required: true },
    description: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
)

export const Product = model<TProduct>('product', productSchema)
