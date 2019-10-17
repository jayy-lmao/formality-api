import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { hash } from 'bcrypt';
import User from '../schemas/User';
import UserInput from './inputs/UserInput';

interface UserData {
	id: number;
	email: string;
	password: string;
}

const users: UserData[] = [
	{
		id: 1,
		email: 'Steven@steven.steven',
		password: 'hlfahsdflj'
	}
];

@Resolver((of) => User)
class UserResolver {
	@Query((returns) => [ User ])
	users(): UserData[] {
		return users;
	}

	@Mutation((returns) => User)
	async createUser(@Arg('data') data: UserInput): Promise<User> {
		const saltRounds = 10;
		const { id, email, password: plaintext } = data;
		const password = await hash(plaintext, saltRounds);
		const newUser: UserData = {
			id,
			email,
			password
		};
		users.push(newUser);
		return newUser;
	}
}

export default UserResolver;
