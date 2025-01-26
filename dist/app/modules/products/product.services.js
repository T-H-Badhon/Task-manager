"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const AppError_1 = require("../../errors/AppError");
const product_model_1 = require("./product.model");
const category_model_1 = require("../category/category.model");
const addProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_model_1.Category.findOne({ name: 'Uncategorized' });
    payload.category = category === null || category === void 0 ? void 0 : category._id;
    const product = yield product_model_1.Product.create(payload);
    if (!(product === null || product === void 0 ? void 0 : product._id)) {
        throw new AppError_1.AppError(400, 'Product not created!');
    }
    return product;
});
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.Product.find({}).populate('category');
    return products;
});
const updateProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield product_model_1.Product.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!(newProduct === null || newProduct === void 0 ? void 0 : newProduct._id)) {
        throw new AppError_1.AppError(400, 'Product not updated!');
    }
    return newProduct;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield product_model_1.Product.deleteOne({ _id: id });
    if (!(deletedProduct === null || deletedProduct === void 0 ? void 0 : deletedProduct.deletedCount)) {
        throw new AppError_1.AppError(400, 'Product not deleted!');
    }
    return deletedProduct;
});
exports.productServices = {
    addProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
};
