const sysConf = require('../../config/system.config.json');

type SystemConfigType = {
    app: {
        port: number;
    };
};

export const systemConfig: SystemConfigType = sysConf;
