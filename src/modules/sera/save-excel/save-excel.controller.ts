import {Controller, Get} from '@nestjs/common';
import {GetMaxService} from "../get-max/get-max.service";
import {ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {SaveExcelService} from "./save-excel.service";

@ApiCreatedResponse()
@ApiTags('save-excel')
@Controller('save-excel')
export class SaveExcelController {
    constructor(
        private readonly saveExcelService: SaveExcelService
    ) {}

    @ApiOperation({ summary: 'PROCEDURE SERA.PUP_EXP_EXCEL_CLIENTES' })
    @Get()
    async getQueryToExcel() {
        const found = await this.saveExcelService.getQueryToExcel();
        return found
            ? found
            : { statusCode: '404', message: 'Not found', error: "Not found"};
    }
}
