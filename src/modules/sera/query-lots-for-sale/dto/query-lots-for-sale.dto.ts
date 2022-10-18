import { ApiProperty } from "@nestjs/swagger";

export class QueryLotsForSaleDto{

  @ApiProperty({ example: 'CLIENTE ID' })
  customerIdIn: number;
}

