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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const GlobalErrorHandler_1 = __importDefault(require("./app/middlewares/GlobalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', "https://inventory-management-kappa-five.vercel.app"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Restrict allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Restrict allowed headers
    credentials: true, // Include credentials (cookies, authorization headers, etc.)
}));
app.use(express_1.default.json());
app.use('/api/v1', routes_1.default);
app.get('/api/v1/scanner/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://products-test-aci.onrender.com/product/' + req.params.id);
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        res.status(500).send('Error fetching data from external API');
    }
}));
app.get('/', (req, res) => {
    res.send('server is running');
});
app.use(GlobalErrorHandler_1.default);
app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Invalid URL !!!',
        error: `${req.path} is not Found`,
    });
});
exports.default = app;
