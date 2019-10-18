import { hash } from "bcrypt";
import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  Authorized
} from "type-graphql";
import { forms } from "../data";
import User from "../schemas/User";
import UserInput from "./inputs/UserInput";

interface IUserData {
  id: number;
  email: string;
  password: string;
}

const users: IUserData[] = [
  {
    email: "Steven@steven.steven",
    id: 1,
    password: "hlfahsdflj"
  }
];

@Resolver(of => User)
class UserResolver {
  @Query(returns => [User])
  public users(): IUserData[] {
    return users;
  }

    @FieldResolver()
    public forms(@Root() userData: IUserData){
        return forms.filter(f => f.userId = userData.id)
    }

  @Mutation(returns => User)
  public async createUser(@Arg("data") data: UserInput): Promise<IUserData> {
    const saltRounds = 10;
    const { id, email, password: plaintext } = data;
    const password = await hash(plaintext, saltRounds);
    const newUser: IUserData = {
      email,
      id,
      password
    };
    users.push(newUser);
    return newUser;
  }
}

export default UserResolver;
