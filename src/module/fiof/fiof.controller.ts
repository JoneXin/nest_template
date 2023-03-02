import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { FiofService } from './fiof.service';

@Controller('/fiof')
export class FiofController {
    constructor(private fiofService: FiofService) {}

    @Get('/af')
    async getAccumulationFund() {
        return this.fiofService.getAccumulationFund();
    }
}
