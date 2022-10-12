import { Module } from '@nestjs/common';
import { GetAuctionDataService } from './get-auction-data.service';
import { GetAuctionDataController } from './get-auction-data.controller';

@Module({
  providers: [GetAuctionDataService],
  controllers: [GetAuctionDataController]
})
export class GetAuctionDataModule {}
