import { Controller, Get, Query } from "@nestjs/common";
import { GetGoodsLabelService } from "./get-goods-label.service";
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetGoodsLabelDto } from "./dto/get-goods-label.dto";
import { PaginationDto } from "../../../shared/dto/pagination.dto";


@ApiCreatedResponse()
@ApiTags('get-goods-label')
@Controller('get-goods-label')
export class GetGoodsLabelController {
  constructor(
    private readonly getGoodsLabelService: GetGoodsLabelService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.SP_GET_CAT_ETIQUETA_BIEN' })
  @ApiResponse({
    status: 200,
    description: 'Lista de Etiquetas de bienes',
    type: GetGoodsLabelDto,
  })
  @Get()
  async getAll( @Query() pagination: PaginationDto ) {
    return await this.getGoodsLabelService.getAll( pagination );
  }
}
