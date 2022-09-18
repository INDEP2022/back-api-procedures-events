import { ApiProperty } from "@nestjs/swagger";

export class QueryStage2EventDto {

  @ApiProperty({ example: 'Data Out' })
  dataP: string;
}