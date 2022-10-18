import { Controller, Get, Param } from "@nestjs/common";
import { GetFileProgService } from "./get-file-prog.service";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";

@ApiCreatedResponse()
@ApiTags('get-file-prog')
@Controller('get-file-prog')
export class GetFileProgController {
  constructor(
    private readonly getFileProgService: GetFileProgService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.SP_GET_EXPEDIENTE_PROG' })
  @ApiParam({
    name: 'certificateIdIn',
    description: 'No. Acta',
  })

  @Get(":certificateIdIn")
  async getById(@Param("certificateIdIn") certificateIdIn: number) {
    const found = await this.getFileProgService.getById( certificateIdIn );
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
