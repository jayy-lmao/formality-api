import { Field, Int, ObjectType } from "type-graphql";
import Question from "./Question";
import User from "./User";

@ObjectType()
class Form {
  @Field(type => Int) public id: number;
  @Field() public title: string;
  @Field() public description: string;
  @Field(type => [Question]) public questions: Question[];
  @Field(type => User) public author: User;
}

export default Form;
