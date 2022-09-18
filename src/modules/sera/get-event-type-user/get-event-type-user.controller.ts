import { Controller, Get, Param } from "@nestjs/common";
import { GetXidService } from "../get-xid/get-xid.service";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { GetEventTypeUserService } from "./get-event-type-user.service";

@ApiCreatedResponse()
@ApiTags('get-event-type-user')
@Controller('get-event-type-user')
export class GetEventTypeUserController {
  constructor(
    private readonly getEventTypeUserService: GetEventTypeUserService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.OBT_USUARIOXTPEVENTO' })
  @ApiParam({
    name: 'userIn',
    description: 'Identificador de Usuario',
  })

  @Get(":userIn")
  async getUser(@Param("userIn") userIn: string) {
    const found = await this.getEventTypeUserService.getUser( userIn );
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
