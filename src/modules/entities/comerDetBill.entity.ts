import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

// @Index("isia205p1_comer_det", ["idDetfactura", "idEvento", "idFactura"], {
//   unique: true,
// })
// @Index("comer_detfacturas_pkey", ["idDetfactura", "idEvento", "idFactura"], {
//   unique: true,
// })
// @Index("isia205s1_comer_det", ["idEvento", "idFactura"], {})
// @Index("isia205s2_comer_det", ["noBien"], {})
@Entity("comer_detfacturas", { schema: "sera" })
export class comerDetBillEntity {
  @ApiProperty({example: 'No. Evento'})
  @PrimaryGeneratedColumn({
    name: "id_evento",
  })
  eventId: number;

  @ApiProperty({example: 'No. Factura'})
  @PrimaryGeneratedColumn({
    name: "id_factura",
  })
  billId: number;

  @ApiProperty({example: 'No. DetFactura'})
  @PrimaryGeneratedColumn({
    name: "id_detfactura",
  })
  detailBillid: number;

  @Column("numeric", { name: "id_lote", precision: 10, scale: 0 })
  lotId: number;

  @Column("numeric", { name: "no_bien", precision: 10, scale: 0 })
  goodsId: number;

  @Column("numeric", { name: "cantidad", precision: 19, scale: 2 })
  quantity: number;

  @Column("character varying", { name: "descripcion", length: 1250 })
  description: string;

  @Column("numeric", { name: "preciovta", precision: 19, scale: 2 })
  vtaPrice: number;

  @Column("numeric", { name: "iva", precision: 11, scale: 2 })
  vat: number;

  @Column("numeric", { name: "total", precision: 19, scale: 2 })
  total: number;

  @Column("character varying", { name: "marca", nullable: true, length: 60 })
  brand: string | null;

  @Column("character varying", { name: "submarca", nullable: true, length: 60 })
  subBrand: string | null;

  @Column("numeric", { name: "tipo", nullable: true, precision: 3, scale: 0 })
  type: number | null;

  @Column("character varying", { name: "modelo", nullable: true, length: 50 })
  model: string | null;

  @Column("character varying", { name: "motor", nullable: true, length: 80 })
  engine: string | null;

  @Column("character varying", { name: "serie", nullable: true, length: 40 })
  serie: string | null;

  @Column("character varying", {
    name: "matricula",
    nullable: true,
    length: 20,
  })
  tuition: string | null;

  @Column("character varying", {
    name: "no_cabina",
    nullable: true,
    length: 35,
  })
  cabinId: string | null;

  @Column("character varying", { name: "tipodir", nullable: true, length: 20 })
  dirType: string | null;

  @Column("character varying", {
    name: "no_transferente",
    nullable: true,
    length: 8,
  })
  transferenceId: string | null;

  @Column("character varying", {
    name: "tipovehiculo",
    nullable: true,
    length: 75,
  })
  vehicleId: string | null;

  @Column("character varying", {
    name: "nocilindros",
    nullable: true,
    length: 10,
  })
  cylinderId: string | null;

  @Column("character varying", {
    name: "procedencia",
    nullable: true,
    length: 50,
  })
  origin: string | null;

  @Column("character varying", {
    name: "pais_origen",
    nullable: true,
    length: 50,
  })
  originCountry: string | null;

  @Column("character varying", {
    name: "desc_cvman",
    nullable: true,
    length: 150,
  })
  cvmanDis: string | null;

  @Column( {type: Date, name: "fecha_evento", nullable: true })
  eventDate: Date | null;

  @Column("numeric", {
    name: "iva_simplificado",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  simplifiedVat: number | null;

  @Column("numeric", {
    name: "id_evento_cs",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  csEventId: number | null;

  @Column("numeric", {
    name: "id_factura_cs",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  csBillId: number | null;

  @Column("numeric", {
    name: "isr_retenido",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  WithheldIsr: number | null;

  @Column("numeric", {
    name: "monto_retenido",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  WithheldAmount: number | null;

  @Column("numeric", { name: "no_registro", nullable: true })
  registryId: number | null;

  @Column("character varying", { name: "unidad", nullable: true, length: 200 })
  unity: string | null;

  @Column("numeric", {
    name: "monto_app_iva",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  vatAppAmount: number | null;

  @Column("numeric", {
    name: "monto_noapp_iva",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  vatAppAmountId: number | null;

  @Column("numeric", {
    name: "id_avaluo",
    nullable: true,
    precision: 15,
    scale: 0,
  })
  appraisalId: number | null;

  @Column("character varying", {
    name: "cve_prodserv_sat",
    nullable: true,
    length: 10,
  })
  satProdservCve: string | null;

  @Column("character varying", {
    name: "cve_unidad_sat",
    nullable: true,
    length: 4,
  })
  satUnitCve: string | null;

  @Column("character varying", {
    name: "cve_tasa_cuota_sat",
    nullable: true,
    length: 9,
  })
  satShareCve: string | null;

  @Column("character varying", {
    name: "cve_impuesto_sat",
    nullable: true,
    length: 4,
  })
  satTaxCve: string | null;

  @Column("character varying", {
    name: "cve_tipo_factor_sat",
    nullable: true,
    length: 10,
  })
  satFactorTypeCve: string | null;

  @Column("numeric", {
    name: "valor_unitario",
    nullable: true,
    precision: 18,
    scale: 6,
  })
  unitValue: number | null;

  // @Column("character", { name: "trial332", nullable: true, length: 1 })
  // trial332: string | null;
}
