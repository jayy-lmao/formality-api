import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import Form from "../schemas/Form";
import Question from "../schemas/Question";
import User from "../schemas/User";
import FormInput from "./inputs/FormInput";

interface IFormData {
    id: number;
    author: number;
    title: string;
    description: string;
    notes: string;
}

const forms: IFormData[] = [
    {
        author: 1,
        description: "jklas fdakjkaf kjfaldfdajk",
        id: 1,
        notes: "dfg",
        title: "Hellaosd",
    },
];

@Resolver((of) => Form)
class FormResolver {
    @Query((returns) => [ Form ])
    public forms(): IFormData[] {
        return forms;
    }

    @Mutation((returns) => Form)
    public async createForm(@Arg("data") data: FormInput): Promise<Form>{
        const { author, description, id, title, notes } = data;
        const newForm: Form = {
            author,
            description,
            id,
            notes,
            // questions: [],
            title,
        };
        await forms.push(newForm);
        return newForm;
    }
}

export default FormResolver;
