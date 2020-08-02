"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var PORT = 3333;
app_1.default.listen(PORT | 3333, function () {
    console.log("\uD83D\uDE80 Server Started on Port http://localhost:" + PORT);
});
