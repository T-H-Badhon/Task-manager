import { Category } from '../modules/category/category.model'

export const seedUncategory = async () => {
  const isExsist = await Category.findOne({ name: 'Uncategorized' })

  if (!isExsist) {
    await Category.create({ name: 'Uncategorized' })
  }
}
