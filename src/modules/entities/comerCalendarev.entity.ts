import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("comer_calendarev", { schema: "sera" })
export class ComerCalendarevEntity {
  @ApiProperty({example: 'Id. Calendario'})
  @PrimaryGeneratedColumn({
    name: "id_calendar",
  })
  calendarId: number;

  @Column("numeric", { name: "id_evento"})
  eventId: number;

  @Column("numeric", { name: "id_estatus"})
  statusId: number;

  @Column("numeric", { name: "dia"})
  day: number;

  @Column("numeric", { name: "mes"})
  month: number;

  @Column("numeric", { name: "anio"})
  year: number;

  @Column("numeric", { name: "rango_dias"})
  daysRange: number;
}
