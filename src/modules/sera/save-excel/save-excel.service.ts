import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository, MoreThan, IsNull } from "typeorm";
import {ComerLotesEntity} from "../../entities/comerLotes.entity";
import {CatTransferenteEntity} from "../../entities/catTransferente.entity";
import {ComerBienesxloteEntity} from "../../entities/comerBienesxlote.entity";
import {ComerClientesEntity} from "../../entities/comerClientes.entity";
import {BienesEntity} from "../../entities/bienes.entity";
import {serialize} from "class-transformer";

@Injectable()
export class SaveExcelService {
    constructor(
        @InjectRepository(ComerLotesEntity) private readonly comerLotesRepository: Repository<ComerLotesEntity>,
        //comer_lotes
        @InjectRepository(CatTransferenteEntity) private readonly catTransferenteRepository: Repository<CatTransferenteEntity>,
        //cat_transferente
        @InjectRepository(ComerBienesxloteEntity) private readonly comerBienesxloteRepository: Repository<ComerBienesxloteEntity>,
        //    comer_bienesxlote
        @InjectRepository(ComerClientesEntity) private readonly comerClientesRepository: Repository<ComerClientesEntity>,
        //    comer_clientes
        @InjectRepository(BienesEntity) private readonly bienesRepository: Repository<BienesEntity>,
        //    bienes

    ) {}

    async getQueryToExcel() {
        const found = await this.comerLotesRepository
            .createQueryBuilder("comer_lotes")
            .innerJoin(ComerBienesxloteEntity,"comer_bienesxlote","comer_lotes.lotId = comer_bienesxlote.lotId")
            .innerJoin(ComerClientesEntity,"comer_clientes","comer_lotes.customerId = comer_clientes.customerId")
            .select([
                "comer_lotes.REFERENCIAL",
                "comer_lotes.LOTE_PUBLICO",
                "comer_lotes.ID_LOTE",
                "comer_lotes.COORDINACION_REG",
                "comer_lotes.DESCRIPCION",
                "comer_lotes.ID_ESTATUSVTA",
                "comer_lotes.ESASIGNADO",
                "comer_lotes.ESCHATARRA",
                "comer_lotes.COORDINADOR_REG",
                "comer_lotes.SOLICITA",
                "comer_lotes.PRECIO_GARANTIA",
                "comer_lotes.ANTICIPO",
                "comer_lotes.MONTO_LIQ",
                "comer_bienesxlote.NO_FACTURA",
                "comer_bienesxlote.FECHA_FACTURA",
                "comer_bienesxlote.NO_CILINDROS",
                "comer_bienesxlote.PROCEDENCIA",
                "comer_bienesxlote.ANEXO",
                "comer_bienesxlote.NO_DELEGACIONREM",
                "comer_bienesxlote.NO_BIEN",
                "comer_clientes.CORREOWEB",
                "comer_clientes.APELLIDO_PATERNO",
                "comer_clientes.APELLIDO_MATERNO",
                "comer_clientes.MUNI_ID",
                "comer_clientes.ESTA_ID",
                "REPLACE(comer_bienesxlote.CAMPO2,',','-') AS CAMPO2",
                "REPLACE(comer_bienesxlote.CAMPO3,',','-') AS CAMPO3",
                "REPLACE(comer_bienesxlote.CAMPO4,',','-') AS CAMPO4",
                "REPLACE(comer_bienesxlote.CAMPO5,',','-') AS CAMPO5",
                "REPLACE(comer_bienesxlote.CAMPO6,',','-') AS CAMPO6",
                "REPLACE(comer_bienesxlote.CAMPO7,',','-') AS CAMPO7",
                "REPLACE(comer_bienesxlote.CAMPO8,',','-') AS CAMPO8",
                "REPLACE(comer_bienesxlote.CAMPO9,',','-') AS CAMPO9",
                "REPLACE(comer_clientes.NOM_RAZON,',','-') AS NOM_RAZON",
                "REPLACE(comer_clientes.RFC,',','-') AS RFC",
                "REPLACE(comer_clientes.CURP,',','-') AS CURP",
                "REPLACE(comer_clientes.CALLE,',','-') AS CALLE",
                "REPLACE(comer_clientes.COLONIA,',','-') AS COLONIA",
                "REPLACE(comer_clientes.DELEGACION,',','-') AS DELEGACION",
                "REPLACE(comer_clientes.ESTADO,',','-') AS ESTADO",
                "REPLACE(comer_clientes.CP,',','-') AS CP",
                "REPLACE(REPLACE(comer_clientes.TELEFONO,',',''''),'''','/')",
                // "COALESCE(cat_transferente.CVMAN,'0') AS CVMAN",
               //  "COALESCE(comer_bienesxlote.CANTIDAD, bienes.CANTIDAD) AS CANTIDAD",
               // " COALESCE(comer_bienesxlote.CAMPO1,bienes.DESCRIPCION) AS CAMPO1",
                "COALESCE(comer_bienesxlote.PRECIO_SIN_IVA, 0) AS PRECIO_SIN_IVA",
                "COALESCE(comer_bienesxlote.IVA_FINAL,0) AS IVA_FINAL",
                "COALESCE(comer_bienesxlote.PRECIO_FINAL,0) AS PRECIO_FINAL",
                "COALESCE(comer_bienesxlote.VALOR_BASE,0) AS VALOR_BASE",
            ])
            .where({
                // publicLot:  MoreThan (0)
                publicLot:  27
            })
            .getRawMany();

        //Save query as Excel
        const foundJson = JSON.stringify(found)
        const XLSX = require('xlsx')
        const convertJsonToExcel = () => {
            const workSheet = XLSX.utils.json_to_sheet(JSON.parse(foundJson));
            const workBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workBook,workSheet,"getQueryToExcel")
            XLSX.write(workBook,{bookType:'xlsx',type:'buffer'})
            XLSX.write(workBook,{bookType:'xlsx',type:'binary'})
            XLSX.writeFile(workBook,"getQueryToExcel.xlsx")
        }
        convertJsonToExcel()
        return foundJson
    }
}
