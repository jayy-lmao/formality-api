import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import Form from "../schemas/Form";
import Question from "../schemas/Question";
import QuestionInput from "./inputs/QuestionInput";

interface IQuestionData {
    id: number;
    text: string;
    questionType: "short_answer" | "multiple_choice";
    // form: number;
}

const questions: IQuestionData[] = [
    {
        // form: 1,
        id: 1,
        questionType: "short_answer",
        text: "What is the speed of an unladen swallow",
    },
];

@Resolver((of) => Question)
class QuestionResolver {
    @Query((returns) => [ Question ])
    public questions(): IQuestionData[] {
        return questions;
    }

    @Mutation((returns) => Question)
    public createQuestion(@Arg("data") data: QuestionInput): IQuestionData {
        const { id, text, questionType } = data;
        const newQuestion: IQuestionData = {
            // form,
            id,
            questionType,
            text,
        };
        questions.push(newQuestion);
        return newQuestion;
    }
}

export default QuestionResolver;
