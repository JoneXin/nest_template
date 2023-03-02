import { Logger, Module } from '@nestjs/common';
import { FiofService } from './fiof.service';
import { FiofController } from './fiof.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { bestDataMysqlConfig } from '../../config/mysql.config';
import { CategoryEntity } from '../..//entities/category.entity';

@Module({
    controllers: [FiofController],
    imports: [
        SequelizeModule.forFeature([CategoryEntity], bestDataMysqlConfig.name),
    ],
    providers: [FiofService, Logger],
    exports: [],
})
export class FiofModule {}
