import { ApiProperty } from "@nestjs/swagger";

export class GetInventoryShipGoodDto {

  @ApiProperty({ example: 'P_NO_REPORTE_IN ' })
  pGoodsIdIn: string;
}