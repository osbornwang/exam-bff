import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [SharedModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('create Examinations should return {status:201}', async () => {
      const result = await appController.createExaminations(
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        120,
      );
      expect(result.data.status).toBe(201);
    });

    it('start Answer Examinations should return {status:201}', async () => {
      const result = await appController.startAnswerExaminations(
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
      );
      expect(result.data.status).toBe(201);
    });

    it('answer Examinations should return {status:201}', async () => {
      const result = await appController.answerExaminations(
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        [
          '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
          '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        ],
      );
      expect(result.data.status).toBe(201);
    });

    it('answer Examinations should return {status:400} time expire', async () => {
      const result = await appController.answerExaminations(
        'lokfu1-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        [
          '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
          '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        ],
      );
      expect(result.data.status).toBe(400);
    });
  });
});
