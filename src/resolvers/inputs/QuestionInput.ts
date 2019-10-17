import { Field, InputType } from 'type-graphql';
import Question from '../../schemas/Question';

@InputType()
class QuestionInput implements Partial<Question> {
	@Field() text: string;
	@Field() id: number;
	@Field() order: number;
	@Field() questionType: 'short_answer' | 'multiple_choice';
}

export default QuestionInput;
