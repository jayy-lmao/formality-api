import { hash } from "bcrypt";

import { ObjectId } from "mongodb";
import { Arg, Authorized, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { forms } from "../data";
import User from "../schemas/User";
import { getToken } from "./getToken";
import UserInput from "./inputs/UserInput";

export interface IUserData {
    id: string;
    email: string;
    password: string;
}

const users: IUserData[] = [
    {
        email: "Steven@steven.steven",
        id: "1",
        password: "hlfahsdflj",
    },
];

@Resolver((of) => User)
class UserResolver {
    private saltRounds = 10;

    @Query((returns) => [ User ])
    public async users(): Promise<User[]> {
        return await User.find();
    }

    @Query((returns) => User)
    public async user(@Arg("id") id: string): Promise<User | undefined> {
        const objectId = new ObjectId(id);
        return await User.findOne({ where: { _id: objectId } });
    }

    @Query((type) => String)
    public async login(@Arg("email") email: string, @Arg("password") password: string): Promise<string> {
        const user = users.find((u) => u.email === email);
        const token = await getToken(user, password);
        return token;
    }

    @FieldResolver()
    public forms(@Root() userData: IUserData) {
        return forms.filter((f) => f.userId === userData.id);
    }

    @Mutation((returns) => User)
    public async createUser(@Arg("data") data: UserInput): Promise<User> {
        const { email, password: plaintext } = data;
        const password = await hash(plaintext, this.saltRounds);
        const newUser = await User.create({
            email,
            password,
        }).save();
        // users.push(newUser);
        return newUser;
    }
}

export default UserResolver;
