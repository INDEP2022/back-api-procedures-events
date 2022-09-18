import { ApiProperty } from "@nestjs/swagger";

export class UpdateEventDto {

  // @ApiProperty({ example: 'No. Evento' })
  // eventIdIn: number;

  @ApiProperty({ example: 'No. tpevento' })
  eventTpId?: number;

  @ApiProperty({ example: 'CVE Proceso' })
  processCve?: string;

  @ApiProperty({ example: 'Observaciones' })
  observations?: string;

  @ApiProperty({ example: 'Fecha de fallo' })
  failureDate?: string;

  @ApiProperty({ example: 'Lugar' })
  place?: string;

  @ApiProperty({ example: 'Fecha de evento' })
  eventDate?: string;

  @ApiProperty({ example: 'Costo Base' })
  baseCost?: string;

  @ApiProperty({ example: 'Id tercero comer' })
  thirdId?: number;

  @ApiProperty({ example: 'Fecha cierre evento' })
  eventClosingDate?: string;

}