import { Length } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import Form from "../../schemas/Form";

@InputType()
class FormInput implements Partial<Form> {
    @Field() public userId: string;
    @Field() 
    @Length(1,32)
    public title: string;
    @Field() 
    @Length(1,255)
    public description: string;
}

export default FormInput;
