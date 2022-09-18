import { ApiProperty } from "@nestjs/swagger";

export class InsertEventDto {
  @ApiProperty({ example: 'ID_EVENTO' })
  eventId: number;

  @ApiProperty({ example: 'ID_TPEVENTO' })
  eventTpId: number;

  @ApiProperty({ example: 'ID_ESTATUSVTA' })
  statusVtaId: string;

  @ApiProperty({ example: 'CVE_PROCESO' })
  processCve: string | null;

  @ApiProperty({ example: 'OBSERVACIONES' })
  observations: string | null;

  @ApiProperty({ example: 'DIRECCION' })
  address: string | null;

  @ApiProperty({ example: 'FEC_FALLO' })
  failureDate: string | null;

  @ApiProperty({ example: 'LUGAR' })
  place: string | null;

  @ApiProperty({ example: 'FEC_EVENTO' })
  eventDate: string | null;

  @ApiProperty({ example: 'COSTO_BASE' })
  baseCost: string | null;

  @ApiProperty({ example: 'USUARIO' })
  user: string | null;

  @ApiProperty({ example: 'MES' })
  month: string | null;

  @ApiProperty({ example: 'ANIO' })
  year: string | null;

  @ApiProperty({ example: 'NO_DELEGACION' })
  delegationId: string | null;

  @ApiProperty({ example: 'ID_TERCERO' })
  thirdId: number | null;

  @ApiProperty({ example: 'FEC_CIERRE' })
  eventClosingDate : string | null;

  @ApiProperty({ example: 'ID_TPSOLAVAL' })
  tpsolavalId: string | null;

  @ApiProperty({ example: 'APLICA_IVA' })
  ivaApplies: string | null;

}