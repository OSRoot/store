"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const PORT = 7000;
app.get("/", (req, res) => {
    res.json({ message: "Hello osroot 🌍" });
});
app.use((0, morgan_1.default)("common"));
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started at http://localhost:${PORT}`);
});
exports.default = app;
