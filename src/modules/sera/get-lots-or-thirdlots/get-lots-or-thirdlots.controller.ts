import {Controller, Get, Param} from '@nestjs/common';
import {GetXidService} from "../get-xid/get-xid.service";
import {ApiCreatedResponse, ApiOperation, ApiParam, ApiTags} from "@nestjs/swagger";
import {GetLotsOrThirdlotsService} from "./get-lots-or-thirdlots.service";

@ApiCreatedResponse()
@ApiTags('get-lots-or-thirdlots')
@Controller('get-lots-or-thirdlots')
export class GetLotsOrThirdlotsController {
    constructor(
        private readonly getLotsOrThirdlotsService: GetLotsOrThirdlotsService
    ) {}

    @ApiOperation({ summary: 'PROCEDURE SERA.CONSULTALOTESOLOTERCERO' })
    @ApiParam({
        name: 'lotIdIn',
        description: 'Identificador de Lote',
    })

    @Get(":lotIdIn")
    async getLotOrThird(@Param("lotIdIn") lotIdIn: number) {
        const found = await this.getLotsOrThirdlotsService.getLotOrThird( lotIdIn );
        return found
            ? found
            : { statusCode: '404', message: 'Not found', error: "Not found"};
    }
}
