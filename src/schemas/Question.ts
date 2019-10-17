import { Field, ID, ObjectType } from "type-graphql";
import Form from "./Form";

@ObjectType()
class Question {
  @Field(type => ID) public id: number;
  @Field() public formId: number;
  @Field() public text: string;
  @Field() public questionType: string;
  @Field(type => Form) public form: number;
}

export default Question;
