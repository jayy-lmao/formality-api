export interface IQuestionData {
  id: number;
  formId: number;
  text: string;
  questionType: "short_answer" | "multiple_choice";
}
