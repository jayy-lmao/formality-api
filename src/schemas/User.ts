import { Field, Int, ObjectType } from "type-graphql";
import Form from "./Form";

@ObjectType()
class User {
  @Field(type => Int) public id: number;
  @Field() public email: string;
  @Field() public password: string;
  @Field(type => [Form]) public forms: Form[];
}
export default User;
