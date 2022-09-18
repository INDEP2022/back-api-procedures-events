import { ApiProperty } from "@nestjs/swagger";

export class MaxNumberDto {

  @ApiProperty({ example: 'Data Out' })
  dataTevt: string;
}