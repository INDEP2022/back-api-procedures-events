import { Body, Controller, Param, Put } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateFailureDateService } from "./update-failure-date.service";
import { UpdateFailureDateDto } from "./dto/update-failure-date.dto";

@ApiCreatedResponse()
@ApiTags('update-failure-date')
@Controller('update-failure-date')
export class UpdateFailureDateController {
  constructor(
    private readonly updateFailureDateService: UpdateFailureDateService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.ACTUALIZA_FEC_FALLO' })
  @ApiParam({
    name: 'idUpdate',
    description: 'Identificador de evento',
    type: Number })
  @ApiBody({
    type: UpdateFailureDateDto })
  @ApiResponse({
    status: 200,
    description: 'Modificar un evento por su identificador.',
    type: UpdateFailureDateDto })
  @Put(':idUpdate')
  async putDate(@Param('idUpdate') idUpdate: number, @Body() updateFailureDateDto:UpdateFailureDateDto) {
    const task = await this.updateFailureDateService.putDate(idUpdate,updateFailureDateDto);
    return task?task:{ statusCode: '404', message: 'not found', error: "Not found"};
  }
}
