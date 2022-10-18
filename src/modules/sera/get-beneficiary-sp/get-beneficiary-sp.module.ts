import { Module } from '@nestjs/common';
import { GetBeneficiarySpService } from './get-beneficiary-sp.service';
import { GetBeneficiarySpController } from './get-beneficiary-sp.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ssf3CatBeneficiarySpEntity } from "../../entities/ssf3CatBeneficiarySp.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Ssf3CatBeneficiarySpEntity]),
  ],
  providers: [GetBeneficiarySpService],
  controllers: [GetBeneficiarySpController]
})
export class GetBeneficiarySpModule {}
