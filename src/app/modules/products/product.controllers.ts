import catchAsync from '../../utilities/catchAsync'
import response from '../../utilities/response'
import { productServices } from './product.services'

const addProduct = catchAsync(async (req, res) => {
  const result = await productServices.addProduct(req.body)

  response(res, {
    statusCode: 200,
    success: true,
    message: '',
    data: result,
  })
})
const getAllProduct = catchAsync(async (req, res) => {
  const result = await productServices.getAllProduct()
  response(res, {
    statusCode: 200,
    success: true,
    message: '',
    data: result,
  })
})
const updateProduct = catchAsync(async (req, res) => {
  const result = await productServices.updateProduct(req.params.id, req.body)

  response(res, {
    statusCode: 200,
    success: true,
    message: '',
    data: result,
  })
})
const deleteProduct = catchAsync(async (req, res) => {
  const result = await productServices.deleteProduct(req.params.id)

  response(res, {
    statusCode: 200,
    success: true,
    message: '',
    data: result,
  })
})

export const productControllers = {
  addProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
}
