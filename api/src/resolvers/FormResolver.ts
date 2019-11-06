import { ObjectId } from "mongodb";
import { Arg, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { IFormData } from "../IFormData";
import Form from "../schemas/Form";
import Question from "../schemas/Question";
import User from "../schemas/User";
import { IContext } from "./IContext";
import FormInput from "./inputs/FormInput";

@Resolver(() => Form)
class FormResolver {
    // @Query(() => [ Form ])
    // public async forms(): Promise<Form[]> {
    //     return await Form.find();
    // }

    @Authorized()
    @Query((returns) => [ Form ])
    public async forms(@Ctx() ctx: IContext): Promise<Form[]> {
        const { id } = ctx.user;
        return await Form.find({ where: { userId: id } });
    }

    @Query((returns) => Form)
    public async form(@Arg("id") id: string): Promise<Form | undefined> {
        const objectId = new ObjectId(id);
        return await Form.findOne({ where: { _id: objectId } });
    }

    @FieldResolver((returns) => User)
    public async author(@Root() formData: IFormData) {
        // return users.find((u) => u.id === formData.userId);
        const objectId = new ObjectId(formData.userId);
        return await User.findOne({ where: { _id: objectId } });
    }

    @Authorized()
    @Mutation((returns) => Form)
    public async createForm(@Arg("data") data: FormInput, @Ctx() ctx: IContext): Promise<Form> {
        const { user } = ctx;
        const { id } = ctx.user;
        const { description, title } = data;
        const newForm = await Form.create({
            description,
            title,
            userId: id,
        }).save();
        return newForm;
    }
    @FieldResolver()
    public questions(@Root() formData: IFormData) {
        return Question.find({ where: { formId: formData.id } });
    }
}

export default FormResolver;
