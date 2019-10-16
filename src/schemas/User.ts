import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
class User {
    @Field(type => Int) id: number;
    @Field() email: string;
    @Field() password: string;
}
export default User;