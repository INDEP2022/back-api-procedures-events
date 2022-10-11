import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("tmp_lotes_comer", { schema: "comer" })
export class TmpLotesComerEntity {
    @PrimaryGeneratedColumn({ name: "id_lote" })
    lotId: string;

    @Column("character varying", {
        name: "id_estatusvta",
        nullable: true,
        length: 4,
      })
      vtaStatusId: string | null;
    
      @Column("numeric", { name: "id_evento", nullable: true })
      eventId: number | null;
    
      @Column("numeric", { name: "lote_publico", nullable: true })
      publicLot: number | null;
    
      @Column("character varying", {
        name: "descripcion",
        nullable: true,
        length: 1250,
      })
      description: string | null;
    
      @Column("numeric", {
        name: "valor_base",
        nullable: true,
        precision: 33,
        scale: 2,
      })
      baseValue: number | null;
    
      @Column("numeric", { name: "id_cliente", nullable: true })
      customerId: number | null;
    
      @Column("numeric", {
        name: "precio_garantia",
        nullable: true,
        precision: 11,
        scale: 2,
      })
      warrantyPrice: number | null;
    
      @Column("numeric", { name: "cubrelotes", nullable: true })
      lotCovers: number | null;
    
      @Column("timestamp without time zone", {
        name: "fecha_entrega",
        nullable: true,
      })
      deliveryDate: Date | null;
    
      @Column("numeric", {
        name: "precio_final",
        nullable: true,
        precision: 15,
        scale: 2,
      })
      finalPrice: number | null;
    
      @Column("numeric", {
        name: "iva_lote",
        nullable: true,
        precision: 11,
        scale: 2,
      })
      lotTax: number | null;
    
      @Column("numeric", {
        name: "monto_app_iva",
        nullable: true,
        precision: 15,
        scale: 2,
      })
      appAmountTax: number | null;
    
      @Column("numeric", {
        name: "anticipo",
        nullable: true,
        precision: 15,
        scale: 2,
      })
      advance: number | null;
    
      @Column("numeric", {
        name: "monto_noapp_iva",
        nullable: true,
        precision: 15,
        scale: 2,
      })
      appTaxAmountId: number | null;
    
      @Column("character varying", {
        name: "linea_captura",
        nullable: true,
        length: 25,
      })
      captureLine: string | null;
    
      @Column("numeric", { name: "estatus_sist", nullable: true })
      systemStatus: number | null;
    
      @Column("numeric", { name: "id_sist", nullable: true })
      systemId: number | null;
    
      @Column("character varying", {
        name: "eschatarra",
        nullable: true,
        length: 1,
      })
      scrap: string | null;
    
      @Column("character varying", {
        name: "dato_fisc_mand",
        nullable: true,
        length: 200,
      })
      dataFiscMand: string | null;
    
      @Column("numeric", { name: "no_delegacion", nullable: true })
      delegationId: number | null;
    
      @Column("character varying", {
        name: "coordinacion_reg",
        nullable: true,
        length: 50,
      })
      regCoordination: string | null;
    
      @Column("numeric", { name: "no_transferente", nullable: true })
        transferenceId: number | null;
    
      @Column("character varying", {
        name: "desc_transferente",
        nullable: true,
        length: 150,
      })
      transferenceDiscId: string | null;
    
      @Column("character varying", { name: "direccion", nullable: true, length: 5 })
      address: string | null;
    
      @Column("character varying", { name: "act_lote", nullable: true, length: 1 })
      lotAct: string | null;
    }