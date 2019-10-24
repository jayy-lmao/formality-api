import { ObjectId } from "mongodb";
import {
  Arg,
  Authorized,
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
import QuestionInput from "./inputs/QuestionInput";

@Resolver(() => Question)
class QuestionResolver {
  @Query(() => [Question])
  public async questions(): Promise<Question[]> {
    return await Question.find();
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

  @Mutation(() => Question)
  public async createQuestion(
    @Arg("data") data: QuestionInput
  ): Promise<Question> {
    const { text, questionType, formId } = data;
    const newQuestion = await Question.create({
      // form,
      formId,
      questionType,
      text
    }).save();
    return newQuestion;
  }
}

export default QuestionResolver;
