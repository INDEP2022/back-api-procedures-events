import { Column, Entity, Index, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("estrategia_rep_implementacion", { schema: "sera" })
export class StrategyRepImplementationEntity {
@ApiProperty({ example: 'Identificador del localizador' })
@PrimaryGeneratedColumn({
  name: "no_reporte",
})
  reportId: number;

  @Column("character varying", {
    name: "cve_reporte",
    nullable: true,
    length: 40,
  })
  reportCve: string | null;

  @Column("numeric", { name: "no_formato", precision: 10, scale: 0 })
  noFormat: number;

  @Column("character varying", { name: "estatus", nullable: true, length: 30 })
  status: string | null;

  @Column( {type: Date, name: "fec_captura", nullable: true })
  captureDate: Date | null;

  @Column( {type: Date, name: "fec_autoriza", nullable: true })
  authorizeDate: Date | null;

  @Column("numeric", { name: "no_mes", nullable: true, precision: 2, scale: 0 })
  noMonth: number | null;

  @Column("numeric", {
    name: "no_anio",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  noYear: number | null;

  @Column("numeric", {
    name: "en_tiempo",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  inTime: number | null;

  @Column("numeric", {
    name: "no_registro",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  noRegistry: number | null;

  @Column("character varying", {
    name: "usr_elaboro",
    nullable: true,
    length: 40,
  })
  usrElaborate: string | null;

  @Column("character varying", {
    name: "observaciones",
    nullable: true,
    length: 2000,
  })
  observations: string | null;

  @Column("numeric", {
    name: "no_estatus_ri",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  noStatusRi: number | null;

  @Column("character varying", {
    name: "observaciones_op",
    nullable: true,
    length: 2000,
  })
  observationsOp: string | null;

  @Column("numeric", {
    name: "folio_universal",
    nullable: true,
    precision: 15,
    scale: 0,
  })
  universalFolio: number | null;

  @Column("character varying", {
    name: "cve_reporte_a",
    nullable: true,
    length: 40,
  })
  cveReportA: string | null;

  // @Column("character", { name: "trial161", nullable: true, length: 1 })
  // trial161: string | null;
}
