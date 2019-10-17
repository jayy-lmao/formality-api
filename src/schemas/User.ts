import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field(type => Int) public id: number;
  @Field() public email: string;
  @Field() public password: string;
}
export default User;
