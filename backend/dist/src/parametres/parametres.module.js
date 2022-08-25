"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametresModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const parametres_entity_1 = require("./entities/parametres.entity");
const parametres_controller_1 = require("../parametres/parametres.controller");
const parametres_service_1 = require("../parametres/parametres.service");
let ParametresModule = class ParametresModule {
};
ParametresModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([parametres_entity_1.Parametres])],
        controllers: [parametres_controller_1.ParametresController],
        providers: [parametres_service_1.ParametresService],
    })
], ParametresModule);
exports.ParametresModule = ParametresModule;
//# sourceMappingURL=parametres.module.js.map