import { Module } from '@nestjs/common';
import { GetLotsOrThirdlotsService } from './get-lots-or-thirdlots.service';
import { GetLotsOrThirdlotsController } from './get-lots-or-thirdlots.controller';

@Module({
  providers: [GetLotsOrThirdlotsService],
  controllers: [GetLotsOrThirdlotsController]
})
export class GetLotsOrThirdlotsModule {}
