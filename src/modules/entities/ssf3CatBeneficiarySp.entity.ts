import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("ssf3_cat_beneficiario_sp", { schema: "sera" })
export class Ssf3CatBeneficiarySpEntity {
  @ApiProperty({example: 'No. Beneficiario'})
  @PrimaryGeneratedColumn({
    name: "no_beneficiario",
  })
  beneficiaryId: string;

  @Column("character varying", { name: "beneficiario", length: 250 })
  beneficiary: string;
}
