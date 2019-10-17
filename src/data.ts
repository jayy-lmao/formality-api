import { IFormData } from "./IFormData";
import { IQuestionData } from "./IQuestionData";
import { IUserData } from "./IUserData";

export const users: IUserData[] = [
  {
    email: "steven@steven.steven",
    id: 1,
    password: "notapassword"
  }
];

export const forms: IFormData[] = [
  {
    description: "jklas fdakjkaf kjfaldfdajk",
    id: 1,
    title: "Hellaosd",
    userId: 1
  }
];
export const questions: IQuestionData[] = [
  {
    // form: 1,
    formId: 1,
    id: 1,
    questionType: "short_answer",
    text: "What is the speed of an unladen swallow"
  }
];
