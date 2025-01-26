"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = require("express");
const category_controllers_1 = require("./category.controllers");
const router = (0, express_1.Router)();
router.post('/add', category_controllers_1.categoryControllers.addCategory);
router.get('/', category_controllers_1.categoryControllers.getAllCategory);
exports.categoryRoutes = router;
