import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

// @Index("isia217s2_comer_est", ["accion", "cvePantalla"], {})
// @Index("isia217s1_comer_est", ["cvePantalla"], {})
// @Index("isia217s3_comer_est", ["cvePantalla", "estatus"], {})
// @Index("isia217s4_comer_est", ["estatus"], {})
// @Index("isia217s5_comer_est", ["identificador"], {})
// @Index("isia217s6_comer_est", ["tipo"], {})
@Entity("comer_estatus_x_pantalla", { schema: "sera" })
export class comerStatusXDisplayEntity {
  @ApiProperty({example: 'No. Estatus'})
  @PrimaryGeneratedColumn({ name: "estatus",
})
  status: string;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 100,
  })
  description: string | null;

  @Column("character varying", { name: "cve_pantalla", length: 30 })
  displayCve: string;

  @Column("character varying", { name: "accion", nullable: true, length: 30 })
  action: string | null;

  @Column("character varying", {
    name: "estatus_nuevo",
    nullable: true,
    length: 4,
  })
  newStatus: string | null;

  @Column("numeric", { name: "no_registro", nullable: true })
  registryId: number | null;

  @Column("character varying", {
    name: "identificador",
    nullable: true,
    length: 5,
  })
  identifier: string | null;

  @Column("character varying", { name: "tipo", nullable: true, length: 15 })
  type: string | null;

  @Column("character varying", { name: "proceso", nullable: true, length: 15 })
  process: string | null;

  // @Column("character", { name: "trial867", nullable: true, length: 1 })
  // trial867: string | null;

  // @ManyToOne(
  //   () => ComerEstatusvta,
  //   (comerEstatusvta) => comerEstatusvta.comerEstatusXPantallas
  // )
  // @JoinColumn([{ name: "estatus", referencedColumnName: "idEstatusvta" }])
  // estatus2: ComerEstatusvta;

  // @ManyToOne(
  //   () => ComerEstatusvta,
  //   (comerEstatusvta) => comerEstatusvta.comerEstatusXPantallas2
  // )
  // @JoinColumn([{ name: "estatus_final", referencedColumnName: "idEstatusvta" }])
  // estatusFinal: ComerEstatusvta;
}
