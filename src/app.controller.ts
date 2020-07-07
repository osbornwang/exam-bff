import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestResponse } from './model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/examinations')
  createExaminations(
    @Body('paperId') paperId: string,
    @Body('teacherId') teacherId: string,
    @Body('duration') duration: number,
  ): RequestResponse {
    return this.appService.createExaminations({
      paperId,
      teacherId,
      duration,
    });
  }

  @Post('/examinations/:examinationId/answer-sheets')
  startAnswerExaminations(
    @Param('examinationId') examinationId: string,
    @Body('studentId') studentId: string,
  ): RequestResponse {
    return this.appService.startExam(examinationId, {
      studentId,
    });
  }

  @Put('/examinations/:examinationId/answers')
  answerExaminations(
    @Param('examinationId') examinationId: string,
    @Body('studentId') studentId: string,
    @Body('answers') answers: string[],
  ): RequestResponse {
    return this.appService.answerExam(examinationId, {
      answers,
      studentId,
    });
  }
}
