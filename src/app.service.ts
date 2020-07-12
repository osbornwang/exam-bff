import { Injectable } from '@nestjs/common';
import {
  Examination,
  StartExamination,
  AnswerSheetParams,
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

  startExam(startExaminationParams: StartExamination): RequestResponse {
    return this.examService.startExam(startExaminationParams).then(result => {
      return result;
    });
  }

  answerExam(answerSheetParams: AnswerSheetParams): RequestResponse {
    return this.examService.answerExam(answerSheetParams).then(result => {
      return result;
    });
  }
}
