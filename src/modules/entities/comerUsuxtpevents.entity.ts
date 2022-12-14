import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


@Entity("comer_usuxtpeventos", { schema: "sera" })
export class ComerUsuxtpeventsEntity {
  @ApiProperty({example: 'No. Evento'})
  @PrimaryGeneratedColumn({ name: "id_tpevento"})
  eventTpId: number;

  @Column("character varying", { name: "usuario", length: 30 })
  user: string;

  @Column("character varying", { name: "usuario_registro", length: 30 })
  userRegister: string;

  @Column( {type: Date, name: "fecha_registro" })
  registrationDate: Date;

}
