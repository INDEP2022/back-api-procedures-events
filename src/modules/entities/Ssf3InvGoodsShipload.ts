import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("ssf3_inv_bien_embarcacion", { schema: "sera" })
export class Ssf3InvGoodsShiploadEntity {
@ApiProperty({ example: 'Identificador del bien' })
@PrimaryGeneratedColumn({
    name: "no_bien",
  })
  goodsId: number;

  @Column("numeric", { name: "no_pm", precision: 3, scale: 0 })
  pmId: number;

  @Column("character varying", { name: "marca", nullable: true, length: 100 })
  brand: string | null;

  @Column("character varying", {
    name: "concepto",
    nullable: true,
    length: 200,
  })
  concept: string | null;

  @Column("character varying", {
    name: "caracteristica",
    nullable: true,
    length: 250,
  })
  feature: string | null;

  @Column("numeric", {
    name: "no_registro",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  noRegistry: number | null;

  @Column("timestamp without time zone", {
    name: "fec_reg_insert",
    nullable: true,
  })
  regInsertDate: Date | null;
}
