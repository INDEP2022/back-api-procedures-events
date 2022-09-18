import { Controller, Get } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { QueryStage2EventService } from "./query-stage2-event.service";

@ApiCreatedResponse()
@ApiTags('query-stage2-event')
@Controller('query-stage2-event')
export class QueryStage2EventController {
  constructor(
    private readonly queryStage2EventService: QueryStage2EventService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.PA_CONSULTAR_EVENTO_FASE2' })
  @Get()
  async getStage() {
    const found = await this.queryStage2EventService.getStage();
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
