import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { InsertEventService } from "./insert-event.service";
import { InsertEventDto } from "./dto/insert-event.dto";

@ApiCreatedResponse()
@ApiTags('insert-event')
@Controller('insert-event')
export class InsertEventController {
  constructor(
    private readonly insertEventService: InsertEventService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.INSERT_EVENTO' })
  @ApiBody({
    type: InsertEventDto,
    description: 'Información de nuevo evento'
  })
  @ApiResponse({
    status: 200,
    description: 'Nuevo Evento',
    type: InsertEventDto,
  })
  @Post()
  async createEvent( @Body() insertEventDto: InsertEventDto ) {
    const eventCreated = await this.insertEventService.createEvent( insertEventDto );
    return eventCreated
      ? eventCreated
      : { statusCode: 503, message: "Event was not created", error: "Error"};
  }
}
