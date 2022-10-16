import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { GetXidService } from './get-xid.service';
import { GetXidController } from './get-xid.controller';
import { ComerEventsEntity } from "../../entities/comerEvents.entity";

@Module({

  imports: [
    TypeOrmModule.forFeature([ComerEventsEntity]),
  ],
  providers: [GetXidService],
  controllers: [GetXidController]
})
export class GetXidModule {}
