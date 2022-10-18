import { ApiProperty } from "@nestjs/swagger";

export class GetThirdLotsDto {

  @ApiProperty({ example: 'EVENTO ID' })
  eventIddIn: number;
}
