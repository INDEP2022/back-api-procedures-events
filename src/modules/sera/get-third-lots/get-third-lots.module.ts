import { Module } from '@nestjs/common';
import { GetThirdLotsService } from './get-third-lots.service';
import { GetThirdLotsController } from './get-third-lots.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerLotsEntity } from "../../entities/comerLots.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerLotsEntity]),
  ],
  providers: [GetThirdLotsService],
  controllers: [GetThirdLotsController]
})
export class GetThirdLotsModule {}
