import { Module } from '@nestjs/common';
import { UpdateAssetsTempService } from './update-assets-temp.service';
import { UpdateAssetsTempController } from './update-assets-temp.controller';

@Module({
  providers: [UpdateAssetsTempService],
  controllers: [UpdateAssetsTempController]
})
export class UpdateAssetsTempModule {}
