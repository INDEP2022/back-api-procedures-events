import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


@Entity("comer_eventos_tproceso", { schema: "sera" })
export class ComerEventosTprocesoEntity {
  @ApiProperty({example: 'No. Evento'})
  @PrimaryGeneratedColumn({
    name: "id_evento",
  })
  eventId: number;

  @Column("numeric", { name: "anio", nullable: true, precision: 4, scale: 0 })
  anio: string | null;

  @Column("numeric", { name: "fase", precision: 2, scale: 0 })
  stage: number;

  @Column("character varying", { name: "publicar", nullable: true, length: 2 })
  publicar: string | null;

  @Column("date", { name: "fec_garantia", nullable: true })
  fecGarantia: string | null;

}
