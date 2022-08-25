"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerieModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const serie_entity_1 = require("./entities/serie.entity");
const serie_controller_1 = require("../serie/serie.controller");
const serie_service_1 = require("../serie/serie.service");
let SerieModule = class SerieModule {
};
SerieModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([serie_entity_1.Serie])],
        controllers: [serie_controller_1.SerieController],
        providers: [serie_service_1.SerieService],
    })
], SerieModule);
exports.SerieModule = SerieModule;
//# sourceMappingURL=serie.module.js.map