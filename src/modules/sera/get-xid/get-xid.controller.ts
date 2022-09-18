import { Controller, Get, Param } from "@nestjs/common";
import { GetXidService } from "./get-xid.service";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";

@ApiCreatedResponse()
@ApiTags('get-xid')
@Controller('get-xid')
export class GetXidController {
  constructor(
    private readonly getXidService: GetXidService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.OBT_EVENTO_XID' })
  @ApiParam({
    name: 'eventIdIn',
    description: 'Identificador de Evento',
  })

  @Get(":eventIdIn")
  async getEvent(@Param("eventIdIn") eventIdIn: number) {
    const found = await this.getXidService.getEvent( eventIdIn );
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
