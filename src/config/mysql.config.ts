const mysqlConf = require('../../config/mysql.config.json');
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';

export const bestDataMysqlConfig: SequelizeModuleOptions = {
    dialect: 'mysql' as Dialect,
    name: 'best_data_db',
    autoLoadModels: true,
    synchronize: false,
    timezone: '+08:00',
    logging: false,
    query: { raw: true },
    host: process.env.MYSQL_HOST || mysqlConf.host,
    port: process.env.MYSQL_PORT || mysqlConf.port,
    username: process.env.MYSQL_USER || mysqlConf.username,
    password: process.env.MYSQL_PASSWORD || mysqlConf.password,
    database: process.env.MYSQL_DB || mysqlConf.database,
};
