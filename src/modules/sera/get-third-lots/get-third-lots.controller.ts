import { Controller, Get, Param } from "@nestjs/common";
import { GetThirdPartyLotsService } from "../get-third-party-lots/get-third-party-lots.service";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { GetThirdLotsService } from "./get-third-lots.service";

@ApiCreatedResponse()
@ApiTags('get-third-lots')
@Controller('get-third-lots')
export class GetThirdLotsController {
  constructor(
    private readonly getThirdLotsService: GetThirdLotsService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.CONSULTALOTESTERCEROS' })
  @ApiParam({
    name: 'eventIddIn',
    description: 'Identificador de Evento',
  })

  @Get(":eventIddIn")
  async getLots(@Param("eventIddIn") eventIddIn: number) {
    const found = await this.getThirdLotsService.getLots(eventIddIn);
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }

}
