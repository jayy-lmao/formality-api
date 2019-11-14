import { IsEmail, MinLength } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import User from "../../schemas/User";

@InputType()
class UserInput implements Partial<User> {
  @Field()
  @IsEmail()
  public email: string;
  @Field()
  @MinLength(5)
  public password: string;
}

export default UserInput;
