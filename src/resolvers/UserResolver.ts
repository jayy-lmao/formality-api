import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { Arg, Authorized, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
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
        password: "hlfahsdflj",
    },
];

@Resolver((of) => User)
class UserResolver {
    private saltRounds = 10;

    @Authorized()
    @Query((returns) => [ User ])
    public users(): IUserData[] {
        return users;
    }

    @Query((returns) => User)
    public user(@Arg("id") id: number): IUserData | undefined {
        return users.find((user) => user.id === id);
    }

    @Query((type) => String)
    public async login(@Arg("email") email: string, @Arg("password") password: string): Promise<string> {
        const user = users.find((u) => u.email === email);
        const token = await getToken(user, password);
        return token;
    }

    @FieldResolver()
    public forms(@Root() userData: IUserData) {
        return forms.filter((f) => (f.userId = userData.id));
    }

    @Mutation((returns) => User)
    public async createUser(@Arg("data") data: UserInput): Promise<IUserData> {
        const { id, email, password: plaintext } = data;
        const password = await hash(plaintext, this.saltRounds);
        const newUser: IUserData = {
            email,
            id,
            password,
        };
        users.push(newUser);
        return newUser;
    }
}

export default UserResolver;

function getToken(user: IUserData | undefined, password: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    if (user) {
      await compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.log('errord');
          throw err;
        }
        if (!isMatch) {
          console.log("no match");
          reject("");
        }
        else {
          const jwToken = jwt.sign({
            data: { user },
          }, process.env.JWT_SECRET || "something_is_better_than_nothing", {
            algorithm: "HS256",
          });
          resolve(jwToken);
        }
      });
    }
    else {
      reject("");
    }
  });
}

