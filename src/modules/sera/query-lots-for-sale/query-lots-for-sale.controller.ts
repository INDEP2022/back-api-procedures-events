import { Controller, Get, Param } from "@nestjs/common";
import { GetThirdLotsService } from "../get-third-lots/get-third-lots.service";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { QueryLotsForSaleService } from "./query-lots-for-sale.service";

@ApiCreatedResponse()
@ApiTags('query-lots-for-sale')
@Controller('query-lots-for-sale')
export class QueryLotsForSaleController {
  constructor(
    private readonly queryLotsForSaleService: QueryLotsForSaleService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.CONSULTALOTESVENTA' })
  @ApiParam({
    name: 'customerIdIn',
    description: 'Identificador de Clientes',
  })

  @Get(":customerIdIn")
  async getLotsSale(@Param("customerIdIn") customerIdIn: number) {
    const found = await this.queryLotsForSaleService.getLotsSale(customerIdIn);
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
