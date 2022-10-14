import {Controller, Get, Param} from '@nestjs/common';
import {ApiCreatedResponse, ApiOperation, ApiParam, ApiTags} from "@nestjs/swagger";
import {GetEventStageService} from "../get-event-stage/get-event-stage.service";
import {GetEventInvoiceService} from "./get-event-invoice.service";

@ApiCreatedResponse()
@ApiTags('get-event-invoice')
@Controller('get-event-invoice')
export class GetEventInvoiceController {
    constructor(
        private readonly getEventInvoiceService: GetEventInvoiceService
    ) {}

    @ApiOperation({ summary: 'PROCEDURE SERA.OBT_EVENTO_XID' })
    @ApiParam({
        name: 'eventIdIn',
        description: 'Identificador de Evento',
    })

    @ApiParam({
        name: 'billIdIn',
        description: 'Identificador de factura',
    })

    @Get(":eventIdIn/:billIdIn")
    async getEventInvoice(@Param("eventIdIn") eventIdIn: number, @Param("billIdIn") billIdIn: number) {
        const found = await this.getEventInvoiceService.getEventInvoice( eventIdIn, billIdIn );
        return found
            ? found
            : { statusCode: '404', message: 'Not found', error: "Not found"};
    }
}
