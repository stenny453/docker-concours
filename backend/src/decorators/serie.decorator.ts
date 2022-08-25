import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Serie = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.serie;
  }
);
