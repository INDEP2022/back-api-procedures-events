import { Module } from '@nestjs/common';
import { UpdateFailureDateService } from './update-failure-date.service';
import { UpdateFailureDateController } from './update-failure-date.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventsEntity]),
  ],
  providers: [UpdateFailureDateService],
  controllers: [UpdateFailureDateController]
})
export class UpdateFailureDateModule {}
