import { Field, Int, ID, ObjectType } from 'type-graphql';
import Form from './Form';

@ObjectType()
class Question {
    @Field(type => ID) id: number;
    @Field(type => Int) order: number;
    @Field() text: string;
    @Field() questionType: string;
    // @Field() options: string[];
    @Field() notes?: string;
    // @Field(type => Form) form: Form;
}

export default Question;