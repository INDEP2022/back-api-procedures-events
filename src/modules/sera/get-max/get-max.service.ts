import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, Repository} from "typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";

@Injectable()
export class GetMaxService {
  constructor(
    @InjectRepository(ComerEventosEntity) private readonly comerEventosRepository: Repository<ComerEventosEntity>,
  ) {}

  async getMax() {
    const found = await this.comerEventosRepository
      .createQueryBuilder("comer_eventos")
      .select("MAX(comer_eventos.eventId)", "idMaxTotal")
      .where({
        eventId: LessThan(9999999),
      })
        .getRawOne();

    const XLSX = require('xlsx')
    const convertJsonToExcel = () => {
      const workSheet = XLSX.utils.json_to_sheet(JSON.parse(found[0]));
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook,workSheet,"getMax")
      XLSX.write(workBook,{bookType:'xlsx',type:'buffer'})
      XLSX.write(workBook,{bookType:'xlsx',type:'binary'})
      XLSX.writeFile(workBook,"getMax.xlsx")
    }
    convertJsonToExcel()
    return found
  }
}