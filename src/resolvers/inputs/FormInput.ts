import { Field, InputType, Int } from "type-graphql";
import Form from "../../schemas/Form";
import Question from "../../schemas/Question";
import User from "../../schemas/User";

@InputType()
class FormInput implements Partial<Form> {
    @Field((type) => Int)
    public id: number;
    @Field() public userId: number;
    @Field() public title: string;
    @Field() public description: string;
    // @Field(type => User) public author: User;
}

export default FormInput;
