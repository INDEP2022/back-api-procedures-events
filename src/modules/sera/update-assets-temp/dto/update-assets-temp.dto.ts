import { ApiProperty } from "@nestjs/swagger";

export class UpdateAssetsTempDto {
    // //from ComerLotesEntity - idEvento
    // @ApiProperty({ example: 'Id. Evento' })
    // pEvent?: number;

    //from ComerBienescolEntity - adress
    @ApiProperty({ example: 'Id' })
    pAdress?: string;
}