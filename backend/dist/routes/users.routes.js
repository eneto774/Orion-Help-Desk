"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CreateUser_1 = __importDefault(require("../services/CreateUser"));
var usersRouter = express_1.Router();
usersRouter.post('/', function (request, response) {
    var _a = request.body, name = _a.name, email = _a.email, password = _a.password;
    var createUser = new CreateUser_1.default();
    var user = createUser.execute({
        name: name,
        email: email,
        password: password,
    });
    return response.json(user);
});
exports.default = usersRouter;
