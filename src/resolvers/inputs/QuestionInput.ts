import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import Question from "../../schemas/Question";

@InputType()
class QuestionInput implements Partial<Question> {
    @Field()
    @Length(1, 255)
    public text: string;
    @Field() public formId: string;
    @Field() public questionType: "short_answer" | "multiple_choice";
    @Field((type) => [ String ], { nullable: true })
    public options?: string[];
}

export default QuestionInput;
