"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var legends_controller_1 = __importDefault(require("./legends/legends.controller"));
var routes = (0, express_1.Router)();
routes.get('/', legends_controller_1.default.list);
routes.get('/:name', legends_controller_1.default.findName);
exports.default = routes;
//# sourceMappingURL=routes.js.map