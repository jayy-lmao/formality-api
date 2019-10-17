export interface IQuestionData {
  id: number;
  formId: number;
  text: string;
  questionType: "short_answer" | "multiple_choice";
  // form: number;
}

export const questions: IQuestionData[] = [
  {
    // form: 1,
    formId: 1,
    id: 1,
    questionType: "short_answer",
    text: "What is the speed of an unladen swallow",
  }
];

export interface IFormData {
  id: number;
  title: string;
  description: string;
}

export const forms: IFormData[] = [
  {
    description: "jklas fdakjkaf kjfaldfdajk",
    id: 1,
    title: "Hellaosd"
  }
];
