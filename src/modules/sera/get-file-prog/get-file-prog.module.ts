import { Module } from '@nestjs/common';
import { GetFileProgService } from './get-file-prog.service';
import { GetFileProgController } from './get-file-prog.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActsDeliveryReceptionEntity } from "../../entities/actsDeliveryReception.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ActsDeliveryReceptionEntity]),
  ],
  providers: [GetFileProgService],
  controllers: [GetFileProgController]
})
export class GetFileProgModule {}
