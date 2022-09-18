import { ApiProperty } from "@nestjs/swagger";

export class EventIdentificationAdDto {

  @ApiProperty({ example: 'Id Evento' })
  eventIdIn: number;
}