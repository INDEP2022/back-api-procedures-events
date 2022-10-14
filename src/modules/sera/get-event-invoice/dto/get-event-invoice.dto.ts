import { ApiProperty } from "@nestjs/swagger";

export class GetEventInvoiceDto {

    @ApiProperty({ example: 'NO. EVENTO: ' })
    eventIdIn: number;

    @ApiProperty({ example: 'NO. FACTURA ' })
    billIdIn: number;
}