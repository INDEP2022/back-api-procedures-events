import { Controller, Get, Param } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { GetKeyReportTaxService } from "./get-key-report-tax.service";


@ApiCreatedResponse()
@ApiTags('get-key-report-tax')
@Controller('get-key-report-tax')
export class GetKeyReportTaxController {
  constructor(
    private readonly getKeyReportTaxService: GetKeyReportTaxService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.SP_GET_CLAVE_REPORT_IMP' })
  @ApiParam({
    name: 'pReportIdIn',
    description: 'Identificador de Organización',
  })

  @Get(":pReportIdIn")
  async getById(@Param("pReportIdIn") pReportIdIn: number) {
    const found = await this.getKeyReportTaxService.getById( pReportIdIn );
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
