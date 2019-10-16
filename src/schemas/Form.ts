import { Field, Int, ObjectType } from 'type-graphql';
import Question from './Question';
import User from './User';

@ObjectType()
class Form {
    @Field(type => Int) id: number;
    @Field() title: string;
    @Field() description: string;
    @Field(type => [Question]) question: Question[];
    @Field() notes: string;
    @Field(type => User) author: User;
}

export default Form;