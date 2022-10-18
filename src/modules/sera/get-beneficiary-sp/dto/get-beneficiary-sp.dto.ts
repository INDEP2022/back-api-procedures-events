import { ApiProperty } from "@nestjs/swagger";

export class GetBeneficiarySpDto {
  @ApiProperty({ example: 'Data Out' })
  pDataOut: string;
}