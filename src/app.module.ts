import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as path from 'path';
import { configService } from './shared/config/config.service';
import { MaxNumberModule } from './modules/sera/max-number/max-number.module';
import { GetMaxModule } from './modules/sera/get-max/get-max.module';
import { GetXidModule } from './modules/sera/get-xid/get-xid.module';
import { GetEventStageModule } from './modules/sera/get-event-stage/get-event-stage.module';
import { QueryTypeEventModule } from './modules/sera/query-type-event/query-type-event.module';
import { GetEventTypeUserModule } from './modules/sera/get-event-type-user/get-event-type-user.module';
import { EventIdentificationAdModule } from './modules/sera/event-identification-ad/event-identification-ad.module';
import { QueryStage2EventModule } from './modules/sera/query-stage2-event/query-stage2-event.module';
import { UpdateEventModule } from './modules/sera/update-event/update-event.module';
import { UpdateFailureDateModule } from './modules/sera/update-failure-date/update-failure-date.module';
import { GetThirdPartyLotsModule } from './modules/sera/get-third-party-lots/get-third-party-lots.module';
import { GetThirdLotsModule } from './modules/sera/get-third-lots/get-third-lots.module';
import { QueryLotsForSaleModule } from './modules/sera/query-lots-for-sale/query-lots-for-sale.module';
import { QueryGeneralEventsModule } from './modules/sera/query-general-events/query-general-events.module';
import { GetBeneficiarySpModule } from './modules/sera/get-beneficiary-sp/get-beneficiary-sp.module';
import { GetFileProgModule } from './modules/sera/get-file-prog/get-file-prog.module';
import { GetGoodsLabelModule } from './modules/sera/get-goods-label/get-goods-label.module';
import { GetInventoryShipGoodModule } from './modules/sera/get-inventory-ship-good/get-inventory-ship-good.module';
import { GetKeyReportTaxModule } from './modules/sera/get-key-report-tax/get-key-report-tax.module';
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
      GetEventStageModule,
      QueryTypeEventModule,
      GetEventTypeUserModule,
      EventIdentificationAdModule,
      QueryStage2EventModule,
      UpdateEventModule,
      UpdateFailureDateModule,
      GetThirdPartyLotsModule,
      GetThirdLotsModule,
      QueryLotsForSaleModule,
      QueryGeneralEventsModule,
      GetBeneficiarySpModule,
      GetFileProgModule,
      GetGoodsLabelModule,
      GetInventoryShipGoodModule,
      GetKeyReportTaxModule,
//Modules
  ],

  
})
export class AppModule {}
