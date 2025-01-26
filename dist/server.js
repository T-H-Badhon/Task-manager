"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const SeedUncategory_1 = require("./app/utilities/SeedUncategory");
let server;
function main() {
    mongoose_1.default.connect('mongodb+srv://level2-admin:level2pass@cluster0.3qumfwu.mongodb.net/inventorymanagement?retryWrites=true&w=majority');
    server = app_1.default.listen(4000, () => {
        console.log(`app listening on port ${4000}`);
    });
    (0, SeedUncategory_1.seedUncategory)();
}
main();
process.on('unhandledRejection', () => {
    console.log('Unhandled Rejection is detected. shuting down...');
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on('uncaughtException', () => {
    console.log('Uncaught Exception is detected. shutting down ...');
    process.exit(1);
});
