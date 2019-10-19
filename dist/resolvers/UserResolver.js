"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const type_graphql_1 = require("type-graphql");
const data_1 = require("../data");
const User_1 = __importDefault(require("../schemas/User"));
const getToken_1 = require("./getToken");
const UserInput_1 = __importDefault(require("./inputs/UserInput"));
const users = [
    {
        email: "Steven@steven.steven",
        id: 1,
        password: "hlfahsdflj",
    },
];
let UserResolver = class UserResolver {
    constructor() {
        this.saltRounds = 10;
    }
    users() {
        return users;
    }
    user(id) {
        return users.find((user) => user.id === id);
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = users.find((u) => u.email === email);
            const token = yield getToken_1.getToken(user, password);
            return token;
        });
    }
    forms(userData) {
        return data_1.forms.filter((f) => (f.userId = userData.id));
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, email, password: plaintext } = data;
            const password = yield bcrypt_1.hash(plaintext, this.saltRounds);
            const newUser = {
                email,
                id,
                password,
            };
            users.push(newUser);
            return newUser;
        });
    }
};
__decorate([
    type_graphql_1.Authorized(),
    type_graphql_1.Query((returns) => [User_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UserResolver.prototype, "users", null);
__decorate([
    type_graphql_1.Query((returns) => User_1.default),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], UserResolver.prototype, "user", null);
__decorate([
    type_graphql_1.Query((type) => String),
    __param(0, type_graphql_1.Arg("email")), __param(1, type_graphql_1.Arg("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "forms", null);
__decorate([
    type_graphql_1.Mutation((returns) => User_1.default),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.default]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
UserResolver = __decorate([
    type_graphql_1.Resolver((of) => User_1.default)
], UserResolver);
exports.default = UserResolver;
//# sourceMappingURL=UserResolver.js.map