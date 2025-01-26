import { AppError } from '../../errors/AppError'
import { TProduct } from './product.types'
import { Product } from './product.model'
import { Category } from '../category/category.model'

const addProduct = async (payload: TProduct) => {
  const category = await Category.findOne({ name: 'Uncategorized' })

  payload.category = category?._id

  const product = await Product.create(payload)

  if (!product?._id) {
    throw new AppError(400, 'Product not created!')
  }

  return product
}

const getAllProduct = async () => {
  const products = await Product.find({}).populate('category')

  return products
}

const updateProduct = async (id: string, payload: Partial<TProduct>) => {
  const newProduct = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })

  if (!newProduct?._id) {
    throw new AppError(400, 'Product not updated!')
  }

  return newProduct
}

const deleteProduct = async (id: string) => {
  const deletedProduct = await Product.deleteOne({ _id: id })

  if (!deletedProduct?.deletedCount) {
    throw new AppError(400, 'Product not deleted!')
  }

  return deletedProduct
}

export const productServices = {
  addProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
}
