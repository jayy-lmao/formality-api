export interface IQuestionData {
  id: string;
  formId: string;
  text: string;
  questionType: "short_answer" | "multiple_choice";
}
