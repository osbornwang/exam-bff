import { Injectable, HttpService } from '@nestjs/common';
import { Examination, AnswerSheet, StartExamination } from './model';

@Injectable()
export class ExamService {
  constructor(private readonly httpService: HttpService) {}
  createExaminations(createExamParams: Examination): any {
    return this.httpService.post(
      'localhost:4200/examinations',
      createExamParams,
    );
  }

  startExam(
    examinationId: string,
    startExaminationParams: StartExamination,
  ): any {
    return this.httpService.post(
      `localhost:4200/examinations/${examinationId}/answer-sheets`,
      startExaminationParams,
    );
  }

  answerExam(examinationId: string, answerSheetParams: AnswerSheet): any {
    return this.httpService.put(
      `localhost:4200/examinations/${examinationId}/answers`,
      answerSheetParams,
    );
  }
}
