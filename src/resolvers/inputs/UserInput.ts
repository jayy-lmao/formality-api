import { Int, Field, InputType } from 'type-graphql';
import User from '../../schemas/User';

@InputType()
class UserInput implements Partial<User> {
	@Field((type) => Int)
	id: number;
	@Field() email: string;
	@Field() password: string;
}

export default UserInput;
