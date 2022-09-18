import { ApiProperty } from "@nestjs/swagger";

export class QueryTypeEventDto {

  @ApiProperty({ example: 'Data Out' })
  pData: string;
}