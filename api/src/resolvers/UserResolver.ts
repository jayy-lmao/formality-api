import { hash } from "bcrypt";

import { ObjectId } from "mongodb";
import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root
} from "type-graphql";
import { forms } from "../data";
import User from "../schemas/User";
import { getToken } from "./getToken";
import { IContext } from "./IContext";
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
  public static async createUser(
    @Arg("data") data: UserInput
  ): Promise<User> {
    console.log({data})
    const { email, password: plaintext } = data;
    const password = await hash(plaintext, this.saltRounds);
    const newUser = await User.create({
      email,
      password
    }).save();
    return newUser;
  }

  private static saltRounds = 10;

  @Query(returns => User, { nullable: true })
  public async me(@Ctx() ctx: IContext): Promise<User | undefined> {
    const userId = (ctx.req as any).session.userId;
    return userId
      ? await User.findOne({ where: { _id: new ObjectId(userId) } })
      : undefined;
  }

  @Query(returns => [User])
  public async users(): Promise<User[]> {
    return await User.find();
  }

  @Authorized()
  @Query(returns => String)
  public async protected(): Promise<string> {
    return "alive";
  }

  @Mutation(type => Boolean)
  public async logout(@Ctx() ctx: IContext) {
    return new Promise((res, rej) => {
      (ctx.req as any).session!.destroy((err: Error) => {
        if (err) {
          return rej(false);
        }
        (ctx.res as any).clearCookie("qid");
        return res(true);
      });
    });
  }

  @Query(returns => User)
  public async user(@Arg("id") id: string): Promise<User | undefined> {
    const objectId = new ObjectId(id);
    return await User.findOne({ where: { _id: objectId } });
  }

  @Mutation(type => String)
  public async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: IContext
  ): Promise<string> {
    const user = await User.findOne({ where: { email } });
    const token = await getToken(user, password);
    (ctx.req as any).session.userId = user && user.id;
    console.log((ctx.req as any).session.userId);
    return token;
  }

  @FieldResolver()
  public forms(@Root() userData: IUserData) {
    return forms.filter(f => f.userId === userData.id);
  }
}

export default UserResolver;
