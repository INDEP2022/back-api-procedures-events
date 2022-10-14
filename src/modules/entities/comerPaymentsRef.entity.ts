import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { ComerCtrlpagos } from "./ComerCtrlpagos";
import { ComerRecibopagos } from "./ComerRecibopagos";

// @Index("isia251s2_comer_pag", ["codigo", "cveBanco"], {})
// @Index(
//   "isia251p2_comer_pag",
//   ["cveBanco", "fecha", "noMovimiento", "referencia"],
//   { unique: true }
// )
// @Index(
//   "comer_pagoref_pkey",
//   ["cveBanco", "fecha", "idPago", "noMovimiento", "referencia"],
//   { unique: true }
// )
// @Index(
//   "isia251s1_comer_pag",
//   ["idLote", "idPago", "referencia", "validoSistema"],
//   {}
// )
// @Index("isia251s3_comer_pag", ["idLote"], {})
// @Index("isia251p1_comer_pag", ["idPago"], { unique: true })
@Entity("comer_pagoref", { schema: "sera" })
export class comerPaymentsRefEntity {
  @ApiProperty({example: 'No. Pago'})
  @PrimaryGeneratedColumn({
    name: "id_pago",
  })
  paymentId: number;

  @ApiProperty({example: 'No. Referencia'})
  @PrimaryGeneratedColumn({
    name: "referencia",
  })
  reference: string;

  @ApiProperty({example: 'No. Movimiento'})
  @PrimaryGeneratedColumn({
    name: "no_movimiento",
  })
  movementId: number;

  @ApiProperty({example: 'No. Fecha'})
  @PrimaryGeneratedColumn({ 
    name: "fecha",
  })
  date: Date;

  @Column("numeric", { name: "monto", precision: 15, scale: 2 })
  amount: number;

  @ApiProperty({example: 'No. Banco'})
  @PrimaryGeneratedColumn({
    name: "cve_banco",
  })
  bankCve: string;

  @Column("numeric", { name: "codigo", nullable: true, precision: 4, scale: 0 })
  code: number | null;

  @Column("numeric", {
    name: "id_lote",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  lotId: number | null;

  @Column("character varying", {
    name: "valido_sistema",
    nullable: true,
    length: 1,
  })
  validSystem: string | null;

  @Column("character varying", {
    name: "noentiempo",
    nullable: true,
    length: 1,
  })
  nointime: string | null;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("character varying", { name: "tipo", nullable: true, length: 1 })
  type: string | null;

  @Column("numeric", {
    name: "idordeningreso",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  orderEntryId: number | null;

  @Column("character varying", {
    name: "resultado",
    nullable: true,
    length: 200,
  })
  result: string | null;

  @Column("numeric", {
    name: "sucursal",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  branch: number | null;

  @Column("numeric", {
    name: "id_pagodevuelve",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  paymentReturnsId: number | null;

  @Column("character varying", {
    name: "conciliado",
    nullable: true,
    length: 1,
  })
  reconciled: string | null;

  @Column( {type: Date, name: "fecha_registro", nullable: true })
  registryDate: Date | null;

  @Column("character varying", {
    name: "referenciaori",
    nullable: true,
    length: 30,
  })
  referenceOri: string | null;

  @Column("character varying", { name: "cuenta", nullable: true, length: 20 })
  account: string | null;

  @Column( {type: Date, name: "fecha_oi", nullable: true })
  date01: Date | null;

  @Column("character varying", { name: "aplicadoa", nullable: true, length: 2 })
  appliedA: string | null;

  @Column("numeric", {
    name: "id_cliente",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  customerId: number | null;

  @Column("numeric", {
    name: "folio_oi",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  sheetOi: number | null;

  @Column("numeric", {
    name: "indicador",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  indicator: number | null;

  @Column("numeric", {
    name: "codigo_edo_cta",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  codeEdoCta: number | null;

  @Column( {type: Date, name: "fecha_afectacion", nullable: true })
  affectationDate: Date | null;

  @Column("numeric", { name: "no_registro", nullable: true })
  registryId: number | null;

  @Column("numeric", {
    name: "id_tipo_sat",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  typeSatId: number | null;

  @Column("numeric", {
    name: "id_gasto",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  spentId: number | null;

  @Column("numeric", {
    name: "id_solicitudpago",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  paymentRequestId: number | null;

  // @Column("character", { name: "trial914", nullable: true, length: 1 })
  // trial914: string | null;

  // @ManyToOne(
  //   () => ComerCtrlpagos,
  //   (comerCtrlpagos) => comerCtrlpagos.comerPagorefs
  // )
  // @JoinColumn([
  //   { name: "cve_banco", referencedColumnName: "cveBanco" },
  //   { name: "codigo", referencedColumnName: "codigo" },
  // ])
  // comerCtrlpagos: ComerCtrlpagos;

  // @OneToMany(
  //   () => ComerRecibopagos,
  //   (comerRecibopagos) => comerRecibopagos.idPago2
  // )
  // comerRecibopagos: ComerRecibopagos[];
}
