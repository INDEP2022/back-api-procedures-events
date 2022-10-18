import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("actas_entrega_recepcion", { schema: "sera" })
export class ActsDeliveryReceptionEntity {

  @ApiProperty({example: 'No. Etiqueta'})
  @PrimaryGeneratedColumn({
    name: "no_acta",
  })
  certificateId: number;

  @Column("numeric", {
    name: "no_expediente",
    precision: 10,
    scale: 0 })
  fileId: number;

  @Column("character varying", { name: "cve_acta", nullable: true, length: 60 })
  actCve: string | null;

  @Column( {type: Date, name: "fec_elaboracion" })
  elaborationDate: Date;

  @Column( {type: Date, name: "fec_recepcion_fisica", nullable: true })
  physicalReceiptDate: Date | null;

  @Column("character varying", {
    name: "direccion",
    nullable: true,
    length: 1000,
  })
  address: string | null;

  @Column("character varying", {
    name: "estatus_acta",
    nullable: true,
    length: 20,
  })
  actStatus: string | null;

  @Column("character varying", {
    name: "testigo1",
    nullable: true,
    length: 100,
  })
  witness1: string | null;

  @Column("character varying", {
    name: "testigo2",
    nullable: true,
    length: 100,
  })
  witness2: string | null;

  @Column("character varying", { name: "tipo_acta", length: 15 })
  actType: string;

  @Column( {type: Date, name: "fec_elaboracion_recibo", nullable: true })
  receiptElaborationDate: Date | null;

  @Column( {type: Date, name: "fec_entrega_de_bienes", nullable: true })
  deliveryOfGoodsDate: Date | null;

  @Column("character varying", {
    name: "responsable",
    nullable: true,
    length: 500,
  })
  responsible: string | null;

  @Column("character varying", {
    name: "metodo_destruccion",
    nullable: true,
    length: 200,
  })
  destructionMethod: string | null;

  @Column("character varying", {
    name: "observaciones",
    nullable: true,
    length: 1000,
  })
  observations: string | null;

  @Column("character varying", {
    name: "aprobado_x_admon",
    nullable: true,
    length: 1,
  })
  approvedXAdmon: string | null;

  @Column( {type: Date, name: "fec_aprobacion_x_admon", nullable: true })
  dateApprovalXAdmon: Date | null;

  @Column("character varying", {
    name: "usuario_aprobo_x_admon",
    nullable: true,
    length: 30,
  })
  userApprovedXAdmon: string | null;

  @Column("numeric", { name: "no_registro", nullable: true })
  noRegistry: number | null;

  @Column( {type: Date, name: "fec_captura" })
  CaptureDate: Date;

  @Column("numeric", {
    name: "no_delegacion_1",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  NoDelegation1: number | null;

  @Column("numeric", {
    name: "no_delegacion_2",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  NoDelegation2: number | null;

  @Column("character varying", {
    name: "identificador",
    nullable: true,
    length: 5,
  })
  identifier: string | null;

  @Column("character varying", { name: "etiqueta", nullable: true, length: 15 })
  label: string | null;

  @Column("numeric", {
    name: "folio_universal",
    nullable: true,
    precision: 15,
    scale: 0,
  })
  universalFolio: number | null;

  @Column("numeric", {
    name: "folio_numerario",
    nullable: true,
    precision: 15,
    scale: 0,
  })
  numeraryFolio: number | null;

  @Column("numeric", {
    name: "no_transferente",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  noTransferable: number | null;

  @Column("character varying", {
    name: "id_tipo_acta",
    nullable: true,
    length: 5,
  })
  actTypeId: string | null;

  @Column("character varying", {
    name: "cve_del_recibe",
    nullable: true,
    length: 6,
  })
  cveOfReceipt: string | null;

  @Column("character varying", {
    name: "testigo_contraloria",
    nullable: true,
    length: 100,
  })
  comptrollerWitness: string | null;

  @Column("numeric", {
    name: "no_solicitud",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  noRequest: number | null;

  @Column( {type: Date, name: "fec_cierre", nullable: true })
  closingDate: Date | null;

  @Column( {type: Date, name: "fec_maxima", nullable: true })
  maxiDate: Date | null;

  @Column("numeric", {
    name: "ind_cumplio",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  indCompliance: number | null;

  @Column( {type: Date, name: "fec_captura_hc", nullable: true })
  dateCaptureHc: Date | null;

  @Column( {type: Date, name: "fec_cierre_hc", nullable: true })
  closingDateHc: Date | null;

  @Column( {type: Date, name: "fec_maxima_hc", nullable: true })
  maxiDateHc: Date | null;

  @Column("character varying", {
    name: "recibir_por",
    nullable: true,
    length: 6,
  })
  receiveBy: string | null;

  @Column("character varying", { name: "asunto", nullable: true, length: 70 })
  affair: string | null;

  // @Column("character", { name: "trial520", nullable: true, length: 1 })
  // trial520: string | null;
}
