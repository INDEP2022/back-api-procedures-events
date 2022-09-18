import { ApiProperty } from "@nestjs/swagger";

export class GetEventTypeUserDto {

  @ApiProperty({ example: 'User' })
  userIn: number;
}