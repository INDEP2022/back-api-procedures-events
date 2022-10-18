import { ApiProperty } from "@nestjs/swagger";

export class GetKeyReportTaxDto {

  @ApiProperty({ example: 'P_NO_REPORTE_IN ' })
  pReportIdIn: string;
}