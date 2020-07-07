import { Injectable, HttpService } from '@nestjs/common';
import { Examination, AnswerSheet, StartExamination } from './model';

@Injectable()
export class ExamService {
  constructor(private readonly httpService: HttpService) {}
  createExaminations(createExamParams: Examination): any {
    return this.httpService
      .post('http://localhost:4200/examinations', createExamParams)
      .toPromise();
  }

  startExam(
    examinationId: string,
    startExaminationParams: StartExamination,
  ): any {
    return this.httpService
      .post(
        `http://localhost:4200/examinations/${examinationId}/answer-sheets`,
        startExaminationParams,
      )
      .toPromise();
  }

  answerExam(examinationId: string, answerSheetParams: AnswerSheet): any {
    return this.httpService
      .put(
        `http://localhost:4200/examinations/${examinationId}/answers`,
        answerSheetParams,
      )
      .toPromise();
  }
}
