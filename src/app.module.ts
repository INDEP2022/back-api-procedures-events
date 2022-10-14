import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as path from 'path';
import { configService } from './shared/config/config.service';
import { MaxNumberModule } from './modules/sera/max-number/max-number.module';
import { GetMaxModule } from './modules/sera/get-max/get-max.module';
import { GetXidModule } from './modules/sera/get-xid/get-xid.module';
import { InsertEventModule } from './modules/sera/insert-event/insert-event.module';
import { GetEventStageModule } from './modules/sera/get-event-stage/get-event-stage.module';
import { QueryTypeEventModule } from './modules/sera/query-type-event/query-type-event.module';
import { GetEventTypeUserModule } from './modules/sera/get-event-type-user/get-event-type-user.module';
import { EventIdentificationAdModule } from './modules/sera/event-identification-ad/event-identification-ad.module';
import { QueryStage2EventModule } from './modules/sera/query-stage2-event/query-stage2-event.module';
import { UpdateEventModule } from './modules/sera/update-event/update-event.module';
import { QueryCurrentEventsModule } from './modules/sera/query-current-events/query-current-events.module';
import { QueryLcThirdModule } from './modules/sera/query-lc-third/query-lc-third.module';
import { GetGoodsEvents540Module } from './modules/sera/get-goods-events-540/get-goods-events-540.module';
import { GetEventLpSpModule } from './modules/sera/get-event-lp-sp/get-event-lp-sp.module';
import { TotalUserEventsModule } from './modules/sera/total-user-events/total-user-events.module';
import { QueryFilterEventModule } from './modules/sera/query-filter-event/query-filter-event.module';
import { GetAuctionDataModule } from './modules/sera/get-auction-data/get-auction-data.module';
import { OngoingEventsModule } from './modules/sera/ongoing-events/ongoing-events.module';
import { GetFilterEventModule } from './modules/sera/get-filter-event/get-filter-event.module';
import { ValEventModule } from './modules/sera/val-event/val-event.module';
import { DeleteEventCanModule } from './modules/sera/delete-event-can/delete-event-can.module';
import { CleanEventModule } from './modules/sera/clean-event/clean-event.module';
import { DeleteEventModule } from './modules/sera/delete-event/delete-event.module';
import { UpdateFailureDateModule } from './modules/sera/update-failure-date/update-failure-date.module';
import { QueryGeneralEventsModule } from './modules/sera/query-general-events/query-general-events.module';
import { UpdateAssetsTempModule } from './modules/sera/update-assets-temp/update-assets-temp.module';
import { SaveExcelModule } from './modules/sera/save-excel/save-excel.module';
import { TemporaryFillingComerNopubModule } from './modules/sera/temporary-filling-comer-nopub/temporary-filling-comer-nopub.module';
import { GetLotsOrThirdlotsModule } from './modules/sera/get-lots-or-thirdlots/get-lots-or-thirdlots.module';
import { GetEventInvoiceModule } from './modules/sera/get-event-invoice/get-event-invoice.module';

@Module({
  imports: [
    TypeOrmModule.forRoot( 
      configService.getTypeOrmConfig(),),
      WinstonModule.forRoot({
        level: 'debug', 
        format: winston.format.combine( 
          winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
          }),
          winston.format.errors({ stack: true }),
          winston.format.splat(),
          winston.format.json(),
        ),
        transports: [ 
          new winston.transports.File({
            dirname: path.join(__dirname, './../log/debug/'),
            filename: 'debug.log',
            level: 'debug',
          }),
          new winston.transports.File({
            dirname: path.join(__dirname, './../log/error/'),
            filename: 'error.log',
            level: 'error',
          }),
          new winston.transports.File({
            dirname: path.join(__dirname, './../log/info/'),
            filename: 'info.log',
            level: 'info',
          }),
          new winston.transports.Console({ level: 'debug' }),
        ],
      }),
      MaxNumberModule,
      GetMaxModule,
      GetXidModule,
      InsertEventModule,
      GetEventStageModule,
      QueryTypeEventModule,
      GetEventTypeUserModule,
      EventIdentificationAdModule,
      QueryStage2EventModule,
      UpdateEventModule,
      QueryCurrentEventsModule,
      QueryLcThirdModule,
      GetGoodsEvents540Module,
      GetEventLpSpModule,
      TotalUserEventsModule,
      QueryFilterEventModule,
      GetAuctionDataModule,
      OngoingEventsModule,
      GetFilterEventModule,
      ValEventModule,
      DeleteEventCanModule,
      CleanEventModule,
      DeleteEventModule,
      UpdateFailureDateModule,
      QueryGeneralEventsModule,
      UpdateAssetsTempModule,
      SaveExcelModule,
      TemporaryFillingComerNopubModule,
      GetLotsOrThirdlotsModule,
      GetEventInvoiceModule,
//Modules
  ],

  
})
export class AppModule {}
