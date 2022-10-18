import { Controller, Get, Query } from "@nestjs/common";
import { GetBeneficiarySpService } from "./get-beneficiary-sp.service";
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetBeneficiarySpDto } from "./dto/get-beneficiary-sp.dto";
import { PaginationDto } from "../../../shared/dto/pagination.dto";

@Controller('get-beneficiary-sp')

@ApiCreatedResponse()
@ApiTags('get-beneficiary-sp')
@Controller('get-beneficiary-sp')
export class GetBeneficiarySpController {
  constructor(
    private readonly getBeneficiarySpService: GetBeneficiarySpService
  ) {}

  @ApiOperation({ summary: 'PROCEDURE SERA.SP_GET_CAT_BENEFICIARIO_SP' })
  @ApiResponse({
    status: 200,
    description: 'Lista de Beneficiarios',
    type: GetBeneficiarySpDto,
  })
  @Get()
  async getAll( @Query() pagination: PaginationDto ) {
    return await this.getBeneficiarySpService.getAll( pagination );
  }
}
