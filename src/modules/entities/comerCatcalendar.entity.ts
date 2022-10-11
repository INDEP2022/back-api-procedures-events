import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("comer_catcalendar", { schema: "sera" })
export class ComerCatcalendarEntity {
  @ApiProperty({example: 'Id. Calendario'})
  @PrimaryGeneratedColumn({ name: "id_estatus"})
  statusId: number;

  @Column("character varying", {name: "descripcion"})
  description: string;

  @Column("character varying", {name: "color"})
  colour: string;

  @Column("character varying", { name: "activo"})
  active: string;

}
