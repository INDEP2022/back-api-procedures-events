import { Controller, Get, Param } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";

import { GetEventStageService } from "./get-event-stage.service";

@ApiCreatedResponse()
@ApiTags('get-event-stage')
@Controller('get-event-stage')
export class GetEventStageController {
  constructor(
    private readonly getEventStageService: GetEventStageService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.SP_OBTN_FASE_EVENTO' })
  @ApiParam({
    name: 'eventIdIn',
    description: 'Identificador de Evento',
  })

  @Get(":eventIdIn")
  async getById(@Param("eventIdIn") eventIdIn: number) {
    const found = await this.getEventStageService.getById( eventIdIn );
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
