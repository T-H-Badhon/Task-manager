import { AppError } from '../../errors/AppError'
import { Category } from './category.model'
import { TCategory } from './category.types'

const addCategory = async (payload: TCategory) => {
  const category = await Category.create(payload)

  if (!category?._id) {
    throw new AppError(400, 'Category not created!')
  }

  return category
}

const getAllCategory = async () => {
  const categories = await Category.aggregate([
    {
      $lookup: {
        from: 'products',
        localField: '_id',
        foreignField: 'category',
        as: 'products',
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        products: 1,
      },
    },
  ])

  return categories
}

export const categoryServices = {
  addCategory,
  getAllCategory,
}
