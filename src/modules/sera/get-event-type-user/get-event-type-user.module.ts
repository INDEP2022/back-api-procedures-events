import { Module } from '@nestjs/common';
import { GetEventTypeUserService } from './get-event-type-user.service';
import { GetEventTypeUserController } from './get-event-type-user.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerUsuxtpeventosEntity } from "../../entities/comerUsuxtpeventos.entity";
import { ComerTpeventosEntity } from "../../entities/comerTpeventos.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerUsuxtpeventosEntity]),
    TypeOrmModule.forFeature([ComerTpeventosEntity]),
  ],
  providers: [GetEventTypeUserService],
  controllers: [GetEventTypeUserController]
})
export class GetEventTypeUserModule {}
