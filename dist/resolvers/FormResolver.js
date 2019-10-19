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
const type_graphql_1 = require("type-graphql");
const data_1 = require("../data");
const Form_1 = __importDefault(require("../schemas/Form"));
const FormInput_1 = __importDefault(require("./inputs/FormInput"));
let FormResolver = class FormResolver {
    forms() {
        return data_1.forms;
    }
    author(formData) {
        return data_1.users.find((u) => u.id === formData.userId);
    }
    createForm(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description, userId, id, title } = data;
            const newForm = {
                description,
                id,
                title,
                userId,
            };
            yield data_1.forms.push(newForm);
            return newForm;
        });
    }
    questions(formData) {
        return data_1.questions.filter(q => q.formId = formData.id);
    }
};
__decorate([
    type_graphql_1.Query((returns) => [Form_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], FormResolver.prototype, "forms", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FormResolver.prototype, "author", null);
__decorate([
    type_graphql_1.Mutation((returns) => Form_1.default),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FormInput_1.default]),
    __metadata("design:returntype", Promise)
], FormResolver.prototype, "createForm", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FormResolver.prototype, "questions", null);
FormResolver = __decorate([
    type_graphql_1.Resolver((of) => Form_1.default)
], FormResolver);
exports.default = FormResolver;
//# sourceMappingURL=FormResolver.js.map