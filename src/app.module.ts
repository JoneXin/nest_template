import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WinstonModule } from 'nest-winston';
import { bestDataMysqlConfig } from './config/mysql.config';

@Module({
    imports: [
        WinstonModule.forRootAsync({
            useFactory: () => ({}),
        }),
        SequelizeModule.forRoot(bestDataMysqlConfig),
    ],
})
export class AppModule {}
