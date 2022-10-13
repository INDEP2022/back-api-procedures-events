import { ApiProperty } from "@nestjs/swagger";

export class GetLotsOrThirdlotsDto {

    @ApiProperty({ example: 'ID LOTE ' })
    lotIdIn: number;
}