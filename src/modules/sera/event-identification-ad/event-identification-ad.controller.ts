import { Controller, Get, Param } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { EventIdentificationAdService } from "./event-identification-ad.service";

@ApiCreatedResponse()
@ApiTags('event-identification-ad')
@Controller('event-identification-ad')
export class EventIdentificationAdController {
  constructor(
    private readonly eventIdentificationAdService: EventIdentificationAdService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.SP_IDENTIFICA_EVENTO_AD' })
  @ApiParam({
    name: 'eventIdIn',
    description: 'Identificador de Evento',
  })

  @Get(":eventIdIn")
  async getById(@Param("eventIdIn") eventIdIn: number) {
    const found = await this.eventIdentificationAdService.getById( eventIdIn );
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
