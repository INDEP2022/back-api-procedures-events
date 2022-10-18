import { ApiProperty } from "@nestjs/swagger";

export class GetGoodsLabelDto {
  @ApiProperty({ example: 'Data Out' })
  pDataOut: string;
}