import { Global, Module, HttpModule } from '@nestjs/common';
import { ExamService } from './exam.service';

@Global()
@Module({
  imports: [HttpModule],
  providers: [ExamService],
  exports: [ExamService],
})
export class SharedModule {}
