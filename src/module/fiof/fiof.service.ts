import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { CategoryEntity } from '../../entities/category.entity';
import { bestDataMysqlConfig } from '../../config/mysql.config';

@Injectable()
export class FiofService {
    private readonly logger = new Logger(FiofService.name);

    constructor(
        @InjectConnection(bestDataMysqlConfig.name)
        private seq: Sequelize,
        @InjectModel(CategoryEntity, bestDataMysqlConfig.name)
        private categoryEntity: CategoryEntity,
    ) {}

    // config 信息
    async getAccumulationFund() {
        return {
            name: 1123123123,
        };
    }
}
