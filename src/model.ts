export interface StatusCode {
  status: number;
}

export interface RequestResponse {
  data: StatusCode;
  status: number;
}

export interface Quizze {
  id?: string;
  teacherId: string;
  question: string;
  score: number;
  referenceAnswer: string;
}

export interface Paper {
  id?: string;
  teacherId: string;
  quizzes: Quizze[];
}

export interface Examination {
  id?: string;
  paperId: string;
  teacherId: string;
  duration: number;
}

export interface StartExamination {
  studentId: string;
}

export interface AnswerSheet {
  id?: string;
  studentId: string;
  answers: string[];
  startTime?: string;
  endTime?: string;
}
