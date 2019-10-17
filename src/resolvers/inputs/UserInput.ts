import { Field, InputType, Int } from "type-graphql";
import User from "../../schemas/User";

@InputType()
class UserInput implements Partial<User> {
  @Field(type => Int)
  public id: number;
  @Field() public email: string;
  @Field() public password: string;
}

export default UserInput;
