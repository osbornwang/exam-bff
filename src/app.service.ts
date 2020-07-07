import { Injectable } from '@nestjs/common';
import {
  StatusCode,
  Examination,
  StartExamination,
  AnswerSheet,
  RequestResponse,
} from './model';
import { ExamService } from './exam.service';

@Injectable()
export class AppService {
  constructor(private examService: ExamService) {}

  getHello(): string {
    return 'Hello World!';
  }

  createExaminations(createExamParams: Examination): RequestResponse {
    return this.examService
      .createExaminations(createExamParams)
      .then(result => {
        return result;
      });
  }

  startExam(
    examinationId: string,
    startExaminationParams: StartExamination,
  ): RequestResponse {
    return this.examService
      .startExam(examinationId, startExaminationParams)
      .then(result => {
        return result;
      });
  }

  answerExam(
    examinationId: string,
    answerSheetParams: AnswerSheet,
  ): RequestResponse {
    return this.examService
      .answerExam(examinationId, answerSheetParams)
      .then(result => {
        return result;
      });
  }
}
