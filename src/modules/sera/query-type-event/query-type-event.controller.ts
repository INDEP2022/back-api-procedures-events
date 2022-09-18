import { Controller, Get } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

import { QueryTypeEventService } from "./query-type-event.service";

@ApiCreatedResponse()
@ApiTags('query-type-event')
@Controller('query-type-eventx')
export class QueryTypeEventController {
  constructor(
    private readonly queryTypeEventService: QueryTypeEventService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.PA_CONSULTA_TPEVENTOS' })
  @Get()
  async getEvent() {
    const found = await this.queryTypeEventService.getEvent();
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
