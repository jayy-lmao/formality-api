import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import Question from '../schemas/Question';
import Form from '../schemas/Form';
import QuestionInput from './inputs/QuestionInput';

interface QuestionData {
    id: number;
    text: string;
    order: number;
    questionType: 'short_answer' | 'multiple_choice';
}

const questions: QuestionData[] = [
	{
		id: 1,
		order: 0,
		text: 'What is the speed of an unladen swallow',
		questionType: 'short_answer'
		// form: 1
	}
];

@Resolver((of) => Question)
class QuestionResolver {

    @Query(returns => [Question])
    questions(): QuestionData[]{
        return questions;
    }

    @Mutation(returns => Question)
    async createQuestion(@Arg("data") data: QuestionInput): Promise<Question> {
        const {id, text, order, questionType} = data;
        const newQuestion: QuestionData = {
            id,
            text,
            order,
            questionType
        }
        await questions.push(newQuestion);
        return newQuestion;
    }

}

export default QuestionResolver;
