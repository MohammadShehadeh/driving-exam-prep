export interface Question {
  question: string;
  image?: string;
  imageAlt?: string;
  answer: number;
  options: string[];
}

export interface Exam {
  text: string;
  questions: Question[];
}
