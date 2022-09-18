import { ApiProperty } from "@nestjs/swagger";

export class GetXidDto {

  @ApiProperty({ example: 'ID Evento_IN ' })
  eventIdIn: number;
}