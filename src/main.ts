import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { systemConfig } from './config/system.config';
import { TransformInterceptor } from './interceptors/api.transform.interpter';
import { JxLogger } from './lib/logger';
import { initMysqlDb } from './utils/db.init';

async function bootstrap() {
    await initMysqlDb();

    const app = await NestFactory.create(AppModule, {
        logger: new JxLogger(),
    });

    app.setGlobalPrefix('api');

    app.useGlobalPipes(new ValidationPipe());

    app.useGlobalInterceptors(new TransformInterceptor());

    await app.listen(systemConfig.app.port, '0.0.0.0', () =>
        console.log(`server running success in ${systemConfig.app.port}`),
    );
}
bootstrap();
