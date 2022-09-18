import { Controller, Get } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { GetMaxService } from "./get-max.service";

@ApiCreatedResponse()
@ApiTags('get-max')
@Controller('get-max')
export class GetMaxController {
  constructor(
    private readonly getMaxService: GetMaxService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.OBT_MAX_EVENTO' })
  @Get()
  async getMax() {
    const found = await this.getMaxService.getMax();
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
