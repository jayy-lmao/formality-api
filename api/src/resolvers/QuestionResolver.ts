import { ObjectId } from "mongodb";
import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root
} from "type-graphql";
import { forms, questions } from "../data";
import { IQuestionData } from "../IQuestionData";
import Form from "../schemas/Form";
import Question from "../schemas/Question";
import { IContext } from "./IContext";
import QuestionInput from "./inputs/QuestionInput";

@Resolver(() => Question)
class QuestionResolver {
  // @Query(() => [Question])
  // public async questions(): Promise<Question[]> {
  //   return await Question.find();
  // }

  @Authorized()
  @Query(returns => [Form])
  public async questions(@Ctx() ctx: IContext): Promise<Question[]> {
    const id = (ctx.req as any).session.userId;
    return await Question.find({ where: { userId: id } });
  }

  @Query(returns => Question)
  public async question(@Arg("id") id: string): Promise<Question | undefined> {
    // return questions.find(question => question.id === id);
    const objectId = new ObjectId(id);
    return await Question.findOne({ where: { _id: objectId } });
  }

  @FieldResolver()
  public async form(@Root() questionData: IQuestionData) {
    // return forms.find((f) => f.id === questionData.formId);
    const objectId = new ObjectId(questionData.formId);
    return await Form.findOne({ where: { _id: objectId } });
  }

  @Authorized()
  @Mutation(returns => Question)
  public async createQuestion(
    @Arg("data") data: QuestionInput,
    @Ctx() ctx: IContext
  ): Promise<Question> {
    const id = (ctx.req as any).session.userId;
    const { text, questionType, formId, options } = data;
    const newQuestion = await Question.create({
      formId,
      options,
      questionType,
      text,
      userId: id
    }).save();
    return newQuestion;
  }
}

export default QuestionResolver;
