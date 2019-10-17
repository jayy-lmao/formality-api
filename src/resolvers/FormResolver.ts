import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { forms, questions, users } from "../data";
import { IFormData } from "../IFormData";
import Form from "../schemas/Form";
import Question from "../schemas/Question";
import User from "../schemas/User";
import FormInput from "./inputs/FormInput";



@Resolver((of) => Form)
class FormResolver {
    @Query((returns) => [ Form ])
    public forms(): IFormData[] {
        return forms;
    }

    @FieldResolver()
    public author(@Root() formData: IFormData) {
        return users.find((u) => u.id === formData.userId);
    }

    @Mutation((returns) => Form)
    public async createForm(@Arg("data") data: FormInput): Promise<IFormData>{
        const { description, userId, id, title } = data;
        const newForm: IFormData = {
            description,
            id,
            title,
            userId,
        };
        await forms.push(newForm);
        return newForm;
    }
    @FieldResolver()
    public questions(@Root() formData: IFormData){
        return questions.filter(q => q.formId = formData.id)
    }
}


export default FormResolver;
