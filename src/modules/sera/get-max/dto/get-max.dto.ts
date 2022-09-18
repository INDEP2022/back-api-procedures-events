import { ApiProperty } from "@nestjs/swagger";

export class GetMaxDto {

  @ApiProperty({ example: 'Data Out' })
  dataTevt: string;
}