import { Field, InputType } from "type-graphql";
import Question from "../../schemas/Question";

@InputType()
class QuestionInput implements Partial<Question> {
	@Field() public text: string;
	@Field() public id: number;
	@Field() public questionType: "short_answer" | "multiple_choice";
}

export default QuestionInput;
