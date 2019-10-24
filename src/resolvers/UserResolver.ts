import { hash } from "bcrypt";

import { ObjectId } from "mongodb";
import {
  Arg,
  Authorized,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root
} from "type-graphql";
import { forms } from "../data";
import User from "../schemas/User";
import { getToken } from "./getToken";
import UserInput from "./inputs/UserInput";

export interface IUserData {
  id: string;
  email: string;
  password: string;
}

/*
* UserResolver is responsible for graphql queries involving users.
*/
@Resolver(of => User)
class UserResolver {
  /**
 * Creates a user.
 * @remarks This method uses type-graphql annotations.
 * @param data - User
 * @returns The user which is created.
 */
  @Mutation(returns => User)
  public static async createUser(@Arg("data") data: UserInput): Promise<User> {
    const { email, password: plaintext } = data;
    const password = await hash(plaintext, this.saltRounds);
    const newUser = await User.create({
      email,
      password
    }).save();
    return newUser;
  }

  private static saltRounds = 10;

  @Query(returns => [User])
  public async users(): Promise<User[]> {
    return await User.find();
  }

  @Authorized()
  @Query(returns => String)
  public async protected(): Promise<string> {
    return "alive";
  }

  @Query(returns => User)
  public async user(@Arg("id") id: string): Promise<User | undefined> {
    const objectId = new ObjectId(id);
    return await User.findOne({ where: { _id: objectId } });
  }

  @Query(type => String)
  public async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<string> {
    const user = await User.findOne({ where: { email } });
    const token = await getToken(user, password);
    return token;
  }

  @FieldResolver()
  public forms(@Root() userData: IUserData) {
    return forms.filter(f => f.userId === userData.id);
  }
}

export default UserResolver;
