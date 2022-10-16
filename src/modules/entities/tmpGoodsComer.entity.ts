import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("tmp_bienes_comer", { schema: "comer" })
export class TmpGoodsComerEntity {
    @ApiProperty({example: 'No. Bien por lote'})
    @PrimaryGeneratedColumn({
        name: "id_bienxlote" })
    lotGoodsId: number;

    @Column("numeric", { name: "no_bien", nullable: true })
    goodsId: number | null;

    @Column("numeric", { name: "id_lote" })
    lotId: number;

    @Column("numeric", {
        name: "valor_base",
        nullable: true,
        precision: 15,
        scale: 2,
    })
    baseValue: number | null;

    @Column("numeric", {
        name: "precio_final",
        nullable: true,
        precision: 15,
        scale: 2,
    })
    finalPrice: number | null;

    @Column("numeric", {
        name: "iva_final",
        nullable: true,
        precision: 13,
        scale: 2,
    })
    finalVat: number | null;

    @Column("numeric", {
        name: "precio_sin_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    })
    priceWithoutVat: number | null;

    @Column("character varying", { name: "campo1", nullable: true, length: 1250 })
    camp1: string | null;

    @Column("character varying", { name: "campo2", nullable: true, length: 50 })
    camp2: string | null;

    @Column("character varying", { name: "campo3", nullable: true, length: 75 })
    camp3: string | null;

    @Column("character varying", { name: "campo4", nullable: true, length: 50 })
    camp4: string | null;

    @Column("character varying", { name: "campo5", nullable: true, length: 50 })
    camp5: string | null;

    @Column("character varying", { name: "campo6", nullable: true, length: 50 })
    camp6: string | null;

    @Column("character varying", { name: "campo7", nullable: true, length: 50 })
    camp7: string | null;

    @Column("character varying", { name: "campo8", nullable: true, length: 1000 })
    camp8: string | null;

    @Column("character varying", { name: "campo9", nullable: true, length: 50 })
    camp9: string | null;

    @Column("numeric", {
        name: "cantidad",
        nullable: true,
        precision: 19,
        scale: 3,
    })
    quantity: number | null;

    @Column("character varying", {
        name: "observaciones",
        nullable: true,
        length: 4000,
    })
    observations: string | null;

    @Column("character varying", {
        name: "pais_procedencia",
        nullable: true,
        length: 50,
    })
    originCountry: string | null;

    @Column("character varying", {
        name: "procedencia",
        nullable: true,
        length: 30,
    })
    origin: string | null;

    @Column("character varying", {
        name: "no_cilindros",
        nullable: true,
        length: 10,
    })
    cylindersId: string | null;

    @Column("numeric", { name: "no_delegacionrem", nullable: true })
    delegationId: number | null;

    @Column("character varying", { name: "anexo", nullable: true, length: 2 })
    annex: string | null;

    @Column("character varying", {
        name: "descripcion_lote",
        nullable: true,
        length: 255,
    })
    lotDescription: string | null;

    @Column("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: true,
    })
    creationDate: Date | null;

    @Column("character varying", { name: "unidad", nullable: true, length: 10 })
    unit: string | null;

    @Column("character varying", {
        name: "observaciones2",
        nullable: true,
        length: 4000,
    })
    observations2: string | null;

    @Column("numeric", { name: "anticipo", nullable: true })
    advance: number | null;

    @Column("numeric", { name: "precio_garantia", nullable: true })
    warrantyPrice: number | null;

    @Column("numeric", { name: "monto_noapp_iva", nullable: true })
    vatAmountId: number | null;

    @Column("numeric", { name: "monto_app_iva", nullable: true })
    vatAppAmount: number | null;

    @Column("numeric", { name: "no_subtipo", nullable: true })
    subtypeId: number | null;

    @Column("numeric", { name: "no_ssubtipo", nullable: true })
    sSubtypeId: number | null;

    @Column("character varying", {
        name: "desc_transferente",
        nullable: true,
        length: 150,
    })
    transferenceDis: string | null;

    @Column("character varying", {
        name: "ubicacion",
        nullable: true,
        length: 250,
    })
    location: string | null;

    @Column("character varying", {
        name: "estado_almacen",
        nullable: true,
        length: 50,
    })
    storeStatus: string | null;
}
