import { Controller, Get } from "@nestjs/common";
import { GetMaxService } from "../get-max/get-max.service";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { QueryGeneralEventsService } from "./query-general-events.service";

@Controller('query-general-events')

@ApiCreatedResponse()
@ApiTags('query-general-events')
@Controller('query-general-events')
export class QueryGeneralEventsController {
  constructor(
    private readonly queryGeneralEventsService: QueryGeneralEventsService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.CONSULTAEVENTOSGENERAL' })
  @Get()
  async getGeneralEvents() {
    const found = await this.queryGeneralEventsService.getGeneralEvents();
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
