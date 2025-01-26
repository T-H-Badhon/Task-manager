"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongooseError_1 = require("../errors/mongooseError");
const duplicateError_1 = require("../errors/duplicateError");
const AppError_1 = require("../errors/AppError");
const castError_1 = require("../errors/castError");
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalErrorHandler = (err, req, res, next) => {
    let message = 'something went Wrong';
    let errorMessage = 'something went Wrong';
    let statusCode = 500;
    const error = err;
    const stack = error === null || error === void 0 ? void 0 : error.stack;
    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = 'Validation Error';
        errorMessage = (0, mongooseError_1.MongooseErrorMessageGenerator)(err);
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'CastError') {
        statusCode = 400;
        message = 'Invalid ID!';
        errorMessage = (0, castError_1.CastErrorMessageGenerator)(err);
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        statusCode = 400;
        message = 'Duplicate Entry!';
        errorMessage = (0, duplicateError_1.DuplicateErrorMessageGenerator)(err);
    }
    else if (err instanceof AppError_1.AppError) {
        statusCode = err.statusCode;
        message = 'BAD REQUEST!';
        errorMessage = err.message;
    }
    else if (err instanceof Error) {
        message = 'Something Went Wrong!';
        errorMessage = err.message;
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorMessage,
        errorDetails: error,
        stack: stack,
    });
};
exports.default = globalErrorHandler;
