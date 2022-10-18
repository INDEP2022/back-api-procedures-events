import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("cat_etiqueta_bien", { schema: "sera" })
export class CatLabelGoodEntity {
  @ApiProperty({example: 'No. Etiqueta'})
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "no_etiqueta",
  })
  labelId: number;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 30,
  })
  description: string | null;
}
