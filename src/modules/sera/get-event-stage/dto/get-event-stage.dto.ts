import { ApiProperty } from "@nestjs/swagger";

export class GetEventStageDto {

  @ApiProperty({ example: 'Id Evento' })
  eventIdIn: number;
}