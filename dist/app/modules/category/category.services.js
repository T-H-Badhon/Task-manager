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
exports.categoryServices = void 0;
const AppError_1 = require("../../errors/AppError");
const category_model_1 = require("./category.model");
const addCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_model_1.Category.create(payload);
    if (!(category === null || category === void 0 ? void 0 : category._id)) {
        throw new AppError_1.AppError(400, 'Category not created!');
    }
    return category;
});
const getAllCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_model_1.Category.aggregate([
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
    ]);
    return categories;
});
exports.categoryServices = {
    addCategory,
    getAllCategory,
};
