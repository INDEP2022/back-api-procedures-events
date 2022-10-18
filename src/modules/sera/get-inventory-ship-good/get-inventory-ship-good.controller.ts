import { Controller, Get, Param } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { GetInventoryShipGoodService } from "./get-inventory-ship-good.service";

@ApiCreatedResponse()
@ApiTags('get-inventory-ship-good')
@Controller('get-inventory-ship-good')
export class GetInventoryShipGoodController {
  constructor(
    private readonly getInventoryShipGoodService: GetInventoryShipGoodService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.SP_GET_INV_BIEN_EMB' })
  @ApiParam({
    name: 'pGoodsIdIn',
    description: 'Identificador de inventario de bienes',
  })

  @Get(":pGoodsIdIn")
  async getById(@Param("pGoodsIdIn") pGoodsIdIn: number) {
    const found = await this.getInventoryShipGoodService.getById( pGoodsIdIn );
    return found
      ? found
      : { statusCode: '404', message: 'Not found', error: "Not found"};
  }
}
