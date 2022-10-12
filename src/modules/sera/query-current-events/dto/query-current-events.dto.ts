import { ApiProperty } from "@nestjs/swagger";
import { DeleteDateColumn } from "typeorm";

export class QueryCurrentEventsDto {

  @ApiProperty({ example: 'Fecha' })
  @DeleteDateColumn()
  deletedDate: Date
}

