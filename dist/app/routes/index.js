"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_routes_1 = require("../modules/category/category.routes");
const product_routes_1 = require("../modules/products/product.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/category',
        route: category_routes_1.categoryRoutes,
    },
    {
        path: '/product',
        route: product_routes_1.productRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
