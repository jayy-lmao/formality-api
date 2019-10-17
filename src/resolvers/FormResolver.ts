import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { forms, questions } from "../data";
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

    @Mutation((returns) => Form)
    public async createForm(@Arg("data") data: FormInput): Promise<IFormData>{
        const { description, id, title } = data;
        const newForm: IFormData = {
            description,
            id,
            title,
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
