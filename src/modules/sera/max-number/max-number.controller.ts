import { Controller, Get } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { MaxNumberService } from "./max-number.service";

@ApiCreatedResponse()
@ApiTags('max-number')
@Controller('max-number')
export class MaxNumberController {
  constructor(
    private readonly maxNumberService: MaxNumberService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.MAX_NUM_EVENTOS' })
  @Get()
  async getMax() {
    const found = await this.maxNumberService.getMax();
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
