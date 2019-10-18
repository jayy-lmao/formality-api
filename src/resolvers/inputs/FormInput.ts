import { Length } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import Form from "../../schemas/Form";

@InputType()
class FormInput implements Partial<Form> {
    @Field((type) => Int)
    public id: number;
    @Field() public userId: number;
    @Field() 
    @Length(1,32)
    public title: string;
    @Field() 
    @Length(1,255)
    public description: string;
    // @Field(type => User) public author: User;
}

export default FormInput;
