import {Body, Controller, Get, Param, Put} from '@nestjs/common';
import {ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UpdateAssetsTempDto} from "./dto/update-assets-temp.dto";
import {UpdateAssetsTempService} from "./update-assets-temp.service";

@ApiCreatedResponse()
@ApiTags('update-assets-temp')
@Controller('update-assets-temp')
export class UpdateAssetsTempController {
    constructor(
        private readonly updateAssetsTempService: UpdateAssetsTempService
    ) {}

    @ApiOperation({ summary: 'PROCEDURE SERA.ACT_TMP_COMER' })
    @ApiParam({
        name: 'eventIdIn',
        description: 'Identificador de Evento',
    })

    @Get(":eventIdIn")
    async getTemp(@Param("eventIdIn") eventIdIn: number) {
        const found = await this.updateAssetsTempService.getTemp( eventIdIn );
        return found
            ? found
            : { statusCode: '404', message: 'Not found', error: "Not found"};
    }
}
