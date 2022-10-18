import { ApiProperty } from "@nestjs/swagger";

export class QueryGeneralEventsDto {

  @ApiProperty({ example: 'Data Output ' })
  pDataOut: number;
}