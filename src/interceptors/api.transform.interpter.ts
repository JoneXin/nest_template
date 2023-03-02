import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseMessage } from './api.transform.class';

export interface Response<T> {
    data: T;
}

@Injectable()
export class TransformInterceptor<T>
    implements NestInterceptor<T, Response<T>>
{
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<Response<T>> {
        return next.handle().pipe(
            map((data) => {
                const response = context.switchToHttp().getResponse();
                // 自定义返回头
                if (data?.type) {
                    response.header('Content-Type', data.type);
                    // 图片流返回
                    if (data?.directives) {
                        response.header(
                            'Content-Type',
                            'image/png; charset=utf-8',
                        );
                        return data.image;
                    }
                    // 自定义直接返回
                    return data?.data;
                }

                response.header(
                    'Content-Type',
                    'application/json; charset=utf-8',
                );
                // 错误信息
                if (data && data.code == 400) {
                    return ResponseMessage.err(data);
                }

                return ResponseMessage.success(data);
            }),
        );
    }
}
