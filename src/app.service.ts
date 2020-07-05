import { Injectable } from '@nestjs/common';
import {
  StatusCode,
  Examination,
  StartExamination,
  AnswerSheet,
} from './model';
import { ExamService } from './exam.service';

@Injectable()
export class AppService {
  constructor(private examService: ExamService) {}

  getHello(): string {
    return 'Hello World!';
  }

  createExaminations(createExamParams: Examination): StatusCode {
    return this.examService.createExaminations(createExamParams);
  }

  startExam(
    examinationId: string,
    startExaminationParams: StartExamination,
  ): StatusCode {
    return this.examService.startExam(examinationId, startExaminationParams);
  }

  answerExam(
    examinationId: string,
    answerSheetParams: AnswerSheet,
  ): StatusCode {
    return this.examService.answerExam(examinationId, answerSheetParams);
  }
}
