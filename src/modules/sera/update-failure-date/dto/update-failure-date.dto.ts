import { ApiProperty } from "@nestjs/swagger";

export class UpdateFailureDateDto {

  @ApiProperty({ example: 'fecha de fallo' })
  failureDate?: Date;
}