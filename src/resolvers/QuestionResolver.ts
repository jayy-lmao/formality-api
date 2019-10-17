import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { forms, questions } from "../data";
import { IQuestionData } from "../IQuestionData";
import Question from "../schemas/Question";
import QuestionInput from "./inputs/QuestionInput";

@Resolver(() => Question)
class QuestionResolver {
    @Query(() => [ Question ])
    public questions(): IQuestionData[] {
        return questions;
    }

    @FieldResolver()
    public form(@Root() questionData: IQuestionData) {
        return forms.find((f) => f.id === questionData.formId);
    }

    @Mutation(() => Question)
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
