const fs = require('fs');
const { join } = require('path');
const sequelize = require('sequelize');
import { Sequelize } from 'sequelize';
import { bestDataMysqlConfig } from '../config/mysql.config';

function getSeqInstance(): Sequelize {
    return new sequelize(bestDataMysqlConfig);
}

/**
 * 初始化mysql 库表
 * @returns bool
 */
export async function initMysqlDb(): Promise<boolean> {
    try {
        const seq = getSeqInstance();
        const sqlPath = join(__dirname, '../../sql');
        const dir = fs.opendirSync(sqlPath);

        for await (const dirent of dir) {
            const initSql = fs
                .readFileSync(join(sqlPath, dirent.name))
                .toString();
            const sqlps = initSql.split(';').filter((s) => !!s.trim());

            // init sql
            await seq.transaction(async (t) => {
                for (let i = 0; i < sqlps.length; i++) {
                    await seq.query(sqlps[i], { transaction: t });
                }
            });
        }
        console.log('初始化数据库成功！');
        return true;
    } catch (_) {
        console.error(_);
        return false;
    }
}
