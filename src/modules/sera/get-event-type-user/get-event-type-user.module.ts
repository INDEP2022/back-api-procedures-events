import { Module } from '@nestjs/common';
import { GetEventTypeUserService } from './get-event-type-user.service';
import { GetEventTypeUserController } from './get-event-type-user.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerUsuxtpeventsEntity } from "../../entities/comerUsuxtpevents.entity";
import { ComerTpeventsEntity } from "../../entities/comerTpevents.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerUsuxtpeventsEntity]),
    TypeOrmModule.forFeature([ComerTpeventsEntity]),
  ],
  providers: [GetEventTypeUserService],
  controllers: [GetEventTypeUserController]
})
export class GetEventTypeUserModule {}
