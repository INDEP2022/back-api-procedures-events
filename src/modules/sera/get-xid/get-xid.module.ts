import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { GetXidService } from './get-xid.service';
import { GetXidController } from './get-xid.controller';
import { ComerEventosEntity } from "../../entities/comerEventos.entity";

@Module({

  imports: [
    TypeOrmModule.forFeature([ComerEventosEntity]),
  ],
  providers: [GetXidService],
  controllers: [GetXidController]
})
export class GetXidModule {}
