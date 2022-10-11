import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("comer_tpeventos", { schema: "sera" })
export class ComerTpeventosEntity {
  @ApiProperty({example: 'No. Evento'})
  @PrimaryGeneratedColumn({
  name: "id_tpevento"})
  eventTpId: number;

  @Column("character varying", { name: "descripcion", length: 30 })
  description: string;

  @Column("character varying", {
    name: "desc_recibo",
    nullable: true,
    length: 30,
  })
  descRecibo: string | null;

  @Column("character varying", { name: "uso", nullable: true, length: 240 })
  uso: string | null;

  @Column("numeric", {
    name: "id_tipo_disp",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  idTipoDisp: number | null;

  @Column("numeric", {
    name: "id_tipo_fallo",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  idTipoFallo: number | null;

}
