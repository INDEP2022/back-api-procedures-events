import {Controller, Get, Param} from '@nestjs/common';
import {ApiCreatedResponse, ApiOperation, ApiParam, ApiTags} from "@nestjs/swagger";
import {TemporaryFillingComerNopubService} from "./temporary-filling-comer-nopub.service";

@ApiCreatedResponse()
@ApiTags('temporary-filling-comer-nopub')
@Controller('temporary-filling-comer-nopub')

export class TemporaryFillingComerNopubController {
    constructor(
        private readonly temporaryFillingComerNopubService: TemporaryFillingComerNopubService
    ) {}

    @ApiOperation({ summary: 'PROCEDURE SERA.LLENA_TMP_COMER_NOPUB' })
    @ApiParam({
        name: 'pEventIn',
        description: 'Identificador de Evento',
    })
    @Get(":pEventIn")
    async getTempData(@Param("pEventIn") pEventIn: number) {
        const found = await this.temporaryFillingComerNopubService.getTempData(pEventIn);
        return found
            ? found
            : { statusCode: '404', message: 'Not found', error: "Not found"};
    }
}
