import { Injectable, HttpService } from '@nestjs/common';
import { Examination, AnswerSheetParams, StartExamination } from './model';

@Injectable()
export class ExamService {
  constructor(private readonly httpService: HttpService) {}
  createExaminations(createExamParams: Examination): any {
    return this.httpService
      .post('http://localhost:4200/examinations', createExamParams)
      .toPromise();
  }

  startExam(startExaminationParams: StartExamination): any {
    const {
      examinationId,
      studentId,
      teacherId,
      paperId,
      duration,
      quizzes,
    } = startExaminationParams;
    return this.httpService
      .post(
        `http://localhost:4200/examinations/${examinationId}/answer-sheet`,
        { studentId, teacherId, paperId, duration, quizzes },
      )
      .toPromise();
  }

  answerExam(answerSheetParams: AnswerSheetParams): any {
    const {
      examinationId,
      studentId,
      answers,
      answerId,
      startTime,
      submitTime,
    } = answerSheetParams;
    return this.httpService
      .put(
        `http://localhost:4200/examinations/${examinationId}/answer-sheet/${answerId}`,
        { studentId, answers, startTime, submitTime },
      )
      .toPromise();
  }
}
