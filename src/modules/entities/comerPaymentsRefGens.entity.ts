import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

// @Index("isia255p1_comer_pag", ["idEvento", "idPagorefgens"], { unique: true })
// @Index("isia255s2_comer_pag", ["idEvento", "idLote"], {})
// @Index("isia255s3_comer_pag", ["idLote", "idPago"], {})
// @Index("isia255s1_comer_pag", ["idPago"], {})
@Entity("comer_pagosrefgens", { schema: "sera" })
export class comerPaymentsRefGensEntity {
  @ApiProperty({example: 'No. Pagos'})
  @PrimaryGeneratedColumn({
    name: "id_pagorefgens",
 })
 paymentsRefGens: number;

  @Column("numeric", { name: "id_pago", precision: 10, scale: 0 })
  paymentId: number;

  @Column("numeric", { name: "id_lote", nullable: true })
  lotId: number | null;

  @Column("numeric", { name: "monto", nullable: true, precision: 15, scale: 2 })
  amount: number | null;

  @Column("character varying", {
    name: "referencia",
    nullable: true,
    length: 30,
  })
  reference: string | null;

  @Column("character varying", {
    name: "tipoingreso",
    nullable: true,
    length: 2,
  })
  entryType: string | null;

  @Column("numeric", {
    name: "no_transferente",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  transferId: number | null;

  @Column("numeric", { name: "iva", nullable: true, precision: 11, scale: 2 })
  tax: number | null;

  @Column("numeric", {
    name: "monto_app_iva",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  amountAppTax: number | null;

  @Column("numeric", {
    name: "monto_noapp_iva",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  amountNoAppTax: number | null;

  @Column("character varying", { name: "tipo", nullable: true, length: 1 })
  type: string | null;

  @ApiProperty({example: 'No. Evento'})
  @PrimaryGeneratedColumn({ name: "id_evento", 
 })
  eventId: number;

  @Column( {type: Date, name: "fecha_proceso", nullable: true })
  processDate: Date | null;

  @Column("numeric", {
    name: "monto_chatarra",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  scrapAmount: number | null;

  // @Column("character", { name: "trial309", nullable: true, length: 1 })
  // trial309: string | null;
}
