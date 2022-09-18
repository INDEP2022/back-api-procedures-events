import { Body, Controller, Param, Put } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateEventDto } from "./dto/update-event.dto";
import { UpdateEventService } from "./update-event.service";

@ApiCreatedResponse()
@ApiTags('update-event')
@Controller('update-event')
export class UpdateEventController {
  constructor(
    private readonly updateEventService: UpdateEventService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.UPDATE_EVENTO' })
  @ApiParam({
    name: 'idUpdate',
    description: 'Identificador de evento',
    type: Number })
  @ApiBody({
    type: UpdateEventDto })
  @ApiResponse({
    status: 200,
    description: 'Modificar un evento por su identificador.',
    type: UpdateEventDto })
  @Put(':idUpdate')
  async putEvent(@Body() updateEventDto:UpdateEventDto, @Param('idUpdate') idUpdate: number) {
    const task = await this.updateEventService.putEvent(idUpdate,updateEventDto);
    return task?task:{ statusCode: '404', message: 'not found', error: "Not found"};
  }
}
