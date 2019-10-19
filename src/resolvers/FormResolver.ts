import { ObjectId } from "mongodb";
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
    public async forms(): Promise<Form[]> {
        return await Form.find();
    }

    @FieldResolver((returns) => User)
    public async author(@Root() formData: IFormData) {
        // return users.find((u) => u.id === formData.userId);
        const objectId = new ObjectId(formData.userId);
        return await User.findOne({ where: { _id: objectId } });
    }

    @Mutation((returns) => Form)
    public async createForm(@Arg("data") data: FormInput): Promise<Form> {
        const { description, userId, title } = data;
        const newForm = await Form.create({
            description,
            title,
            userId,
        }).save();
        // await forms.push(newForm);
        return newForm;
    }
    @FieldResolver()
    public questions(@Root() formData: IFormData) {
        return Question.find({ where: {formId: formData.id}});
    }
}

export default FormResolver;
