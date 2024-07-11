import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const loggingData = {
      timestamp: new Date().toISOString(),
      method: request.method,
      path: request.url,
      data: exception.getResponse(),
    };
    console.log(loggingData);

    response.status(status).json(exception.getResponse());
  }
}
