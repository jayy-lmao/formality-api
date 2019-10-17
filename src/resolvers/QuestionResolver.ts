import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import Form from "../schemas/Form";
import Question from "../schemas/Question";
import QuestionInput from "./inputs/QuestionInput";

interface IQuestionData {
    id: number;
    text: string;
    questionType: "short_answer" | "multiple_choice";
}

const questions: IQuestionData[] = [
    {
		id: 1,
		questionType: "short_answer",
		text: "What is the speed of an unladen swallow",
		// form: 1
	},
];

@Resolver((of) => Question)
class QuestionResolver {

    @Query((returns) => [Question])
    public questions(): IQuestionData[] {
        return questions;
    }

    @Mutation((returns) => Question)
    public async createQuestion(@Arg("data") data: QuestionInput): Promise<Question> {
        const {id, text, questionType} = data;
        const newQuestion: IQuestionData = {
            id,
            questionType,
            text,
        };
        await questions.push(newQuestion);
        return newQuestion;
    }

}

export default QuestionResolver;
