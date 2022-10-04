import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("tmp_lotes_comer", { schema: "comer" })
export class TmpLotesComerEntity {
    @PrimaryGeneratedColumn({ name: "id_lote" })
    idLote: string;

    @Column("character varying", {
        name: "id_estatusvta",
        nullable: true,
        length: 4,
    })
    idEstatusvta: string | null;

    @Column("numeric", { name: "id_evento", nullable: true })
    idEvento: string | null;

    @Column("numeric", { name: "lote_publico", nullable: true })
    lotePublico: string | null;

    @Column("character varying", {
        name: "descripcion",
        nullable: true,
        length: 1250,
    })
    descripcion: string | null;

    @Column("numeric", {
        name: "valor_base",
        nullable: true,
        precision: 33,
        scale: 2,
    })
    valorBase: string | null;

    @Column("numeric", { name: "id_cliente", nullable: true })
    idCliente: string | null;

    @Column("numeric", {
        name: "precio_garantia",
        nullable: true,
        precision: 11,
        scale: 2,
    })
    precioGarantia: string | null;

    @Column("numeric", { name: "cubrelotes", nullable: true })
    cubrelotes: string | null;

    @Column("timestamp without time zone", {
        name: "fecha_entrega",
        nullable: true,
    })
    fechaEntrega: Date | null;

    @Column("numeric", {
        name: "precio_final",
        nullable: true,
        precision: 15,
        scale: 2,
    })
    precioFinal: string | null;

    @Column("numeric", {
        name: "iva_lote",
        nullable: true,
        precision: 11,
        scale: 2,
    })
    ivaLote: string | null;

    @Column("numeric", {
        name: "monto_app_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    })
    montoAppIva: string | null;

    @Column("numeric", {
        name: "anticipo",
        nullable: true,
        precision: 15,
        scale: 2,
    })
    anticipo: string | null;

    @Column("numeric", {
        name: "monto_noapp_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    })
    montoNoappIva: string | null;

    @Column("character varying", {
        name: "linea_captura",
        nullable: true,
        length: 25,
    })
    lineaCaptura: string | null;

    @Column("numeric", { name: "estatus_sist", nullable: true })
    estatusSist: string | null;

    @Column("numeric", { name: "id_sist", nullable: true })
    idSist: string | null;

    @Column("character varying", {
        name: "eschatarra",
        nullable: true,
        length: 1,
    })
    eschatarra: string | null;

    @Column("character varying", {
        name: "dato_fisc_mand",
        nullable: true,
        length: 200,
    })
    datoFiscMand: string | null;

    @Column("numeric", { name: "no_delegacion", nullable: true })
    noDelegacion: string | null;

    @Column("character varying", {
        name: "coordinacion_reg",
        nullable: true,
        length: 50,
    })
    coordinacionReg: string | null;

    @Column("numeric", { name: "no_transferente", nullable: true })
    noTransferente: string | null;

    @Column("character varying", {
        name: "desc_transferente",
        nullable: true,
        length: 150,
    })
    descTransferente: string | null;

    @Column("character varying", { name: "direccion", nullable: true, length: 5 })
    direccion: string | null;

    @Column("character varying", { name: "act_lote", nullable: true, length: 1 })
    actLote: string | null;
}
