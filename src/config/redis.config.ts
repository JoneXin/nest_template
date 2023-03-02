const redisConf = require('../../config/redis.config.json');

type RedisConfigType = {
    password: string;
    host: string;
};

export const redisConfig: RedisConfigType = redisConf;
