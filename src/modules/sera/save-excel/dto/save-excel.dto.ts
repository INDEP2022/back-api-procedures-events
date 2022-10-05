import { ApiProperty } from "@nestjs/swagger";

export class saveExcelDto {

    @ApiProperty({ example: 'Tipo' })
    typeIn: string;


}