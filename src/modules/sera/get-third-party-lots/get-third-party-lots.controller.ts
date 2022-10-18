import { Controller, Get, Param } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { GetThirdPartyLotsService } from "./get-third-party-lots.service";

@ApiCreatedResponse()
@ApiTags('get-third-party-lots')
@Controller('get-third-party-lots')
export class GetThirdPartyLotsController {
  constructor(
    private readonly getThirdPartyLotsService: GetThirdPartyLotsService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.CONSULTALOTESOLOTERCERO' })
  @ApiParam({
    name: 'lotIdIn',
    description: 'Identificador de Lote',
  })

  @Get(":lotIdIn")
  async getThirdLots(@Param("lotIdIn") lotIdIn: number) {
    const found = await this.getThirdPartyLotsService.getThirdLots( lotIdIn );
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
