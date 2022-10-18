import { ApiProperty } from "@nestjs/swagger";

export class GetFileProgDto {
  @ApiProperty({ example: 'No. de Acta' })
  certificateIdIn: string;
}