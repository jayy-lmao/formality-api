import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { forms, questions } from "../data";
import { IFormData } from "../IFormData";
import { IQuestionData } from "../IQuestionData";
import Form from "../schemas/Form";
import Question from "../schemas/Question";
import QuestionInput from "./inputs/QuestionInput";


@Resolver((of) => Question)
class QuestionResolver {
    @Query((returns) => [ Question ])
    public questions(): IQuestionData[] {
        return questions;
    }

    @FieldResolver()
    public form(@Root() questionData: IQuestionData){
        return forms.find(f => f.id === questionData.formId)
    }

    @Mutation((returns) => Question)
    public createQuestion(@Arg("data") data: QuestionInput): IQuestionData {
        const { id, text, questionType, formId } = data;
        const newQuestion: IQuestionData = {
            // form,
            formId,
            id,
            questionType,
            text,
        };
        questions.push(newQuestion);
        return newQuestion;
    }
}

export default QuestionResolver;
