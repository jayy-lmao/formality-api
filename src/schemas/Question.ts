import { Field, ID, Int, ObjectType } from "type-graphql";
import Form from "./Form";

@ObjectType()
class Question {
  @Field(type => ID) public id: number;
  @Field() public text: string;
  @Field() public questionType: string;
  // @Field() options: string[];
  @Field() public notes?: string;
  // @Field(type => Form) form: Form;
}

export default Question;
