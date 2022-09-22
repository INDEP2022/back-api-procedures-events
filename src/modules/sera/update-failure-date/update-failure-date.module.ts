import { Module } from '@nestjs/common';
import { UpdateFailureDateService } from './update-failure-date.service';
import { UpdateFailureDateController } from './update-failure-date.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventosEntity]),
  ],
  providers: [UpdateFailureDateService],
  controllers: [UpdateFailureDateController]
})
export class UpdateFailureDateModule {}
