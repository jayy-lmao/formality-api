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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const data_1 = require("../data");
const Question_1 = __importDefault(require("../schemas/Question"));
const QuestionInput_1 = __importDefault(require("./inputs/QuestionInput"));
let QuestionResolver = class QuestionResolver {
    questions() {
        return data_1.questions;
    }
    question(id) {
        return data_1.questions.find(question => question.id === id);
    }
    form(questionData) {
        return data_1.forms.find((f) => f.id === questionData.formId);
    }
    createQuestion(data) {
        const { id, text, questionType, formId } = data;
        const newQuestion = {
            // form,
            formId,
            id,
            questionType,
            text,
        };
        data_1.questions.push(newQuestion);
        return newQuestion;
    }
};
__decorate([
    type_graphql_1.Query(() => [Question_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], QuestionResolver.prototype, "questions", null);
__decorate([
    type_graphql_1.Query(returns => Question_1.default),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], QuestionResolver.prototype, "question", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QuestionResolver.prototype, "form", null);
__decorate([
    type_graphql_1.Mutation(() => Question_1.default),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuestionInput_1.default]),
    __metadata("design:returntype", Object)
], QuestionResolver.prototype, "createQuestion", null);
QuestionResolver = __decorate([
    type_graphql_1.Resolver(() => Question_1.default)
], QuestionResolver);
exports.default = QuestionResolver;
//# sourceMappingURL=QuestionResolver.js.map