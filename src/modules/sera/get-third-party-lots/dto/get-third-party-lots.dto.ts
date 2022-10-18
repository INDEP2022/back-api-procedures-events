import { ApiProperty } from "@nestjs/swagger";

export class GetThirdPartyLotsDto {

  @ApiProperty({ example: 'LOTE ID: ' })
  lotIdIn: number;
}