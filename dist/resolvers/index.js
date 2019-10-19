"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormResolver_1 = __importDefault(require("./FormResolver"));
const QuestionResolver_1 = __importDefault(require("./QuestionResolver"));
const UserResolver_1 = __importDefault(require("./UserResolver"));
exports.default = [QuestionResolver_1.default, UserResolver_1.default, FormResolver_1.default];
//# sourceMappingURL=index.js.map