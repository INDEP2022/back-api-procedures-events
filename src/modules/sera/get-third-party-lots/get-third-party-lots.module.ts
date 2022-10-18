import { Module } from '@nestjs/common';
import { GetThirdPartyLotsService } from './get-third-party-lots.service';
import { GetThirdPartyLotsController } from './get-third-party-lots.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerLotsEntity } from "../../entities/comerLots.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerLotsEntity]),
  ],
  providers: [GetThirdPartyLotsService],
  controllers: [GetThirdPartyLotsController]
})
export class GetThirdPartyLotsModule {}
