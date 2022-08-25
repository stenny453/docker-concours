"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
const common_1 = require("@nestjs/common");
exports.Serie = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.serie;
});
//# sourceMappingURL=serie.decorator.js.map