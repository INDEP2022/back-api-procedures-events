import { Module } from '@nestjs/common';
import { UpdateFailureDateService } from './update-failure-date.service';
import { UpdateFailureDateController } from './update-failure-date.controller';

@Module({
  providers: [UpdateFailureDateService],
  controllers: [UpdateFailureDateController]
})
export class UpdateFailureDateModule {}
