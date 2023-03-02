import { Logger } from '@nestjs/common';
const logger = new Logger('time_delay_decorator');

/**
 * 检测异步函数的执行时间耗时装饰器
 * @param func_tag
 * @returns
 */
export function TimeConsume(func_tag: string) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const oldValue = descriptor.value;
        descriptor.value = async function () {
            const start = Date.now();
            // eslint-disable-next-line prefer-rest-params
            const ret = await oldValue.apply(this, arguments);
            logger.log(`${func_tag || ''}执行耗时 ${Date.now() - start}ms`);
            return ret;
        };
        return descriptor;
    };
}
