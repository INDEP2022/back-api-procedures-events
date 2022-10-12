import { ApiProperty } from "@nestjs/swagger";

export class TemporaryFillingComerNopubDto {

    @ApiProperty({ example: 'PEVENTO' })
    pEventIn: number;
}
