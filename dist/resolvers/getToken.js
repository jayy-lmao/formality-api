"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.getToken = (user, password) => {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        if (user) {
            yield bcrypt_1.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.log("errord");
                    throw err;
                }
                if (!isMatch) {
                    console.log("no match");
                    reject("");
                }
                else {
                    const jwToken = jsonwebtoken_1.default.sign({
                        data: { user },
                    }, process.env.JWT_SECRET || "something_is_better_than_nothing", {
                        algorithm: "HS256",
                    });
                    resolve(jwToken);
                }
            });
        }
        else {
            reject("");
        }
    }));
};
//# sourceMappingURL=getToken.js.map