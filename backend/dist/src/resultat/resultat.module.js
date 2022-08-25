"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const resultat_entity_1 = require("./entities/resultat.entity");
const resultat_controller_1 = require("../resultat/resultat.controller");
const resultat_service_1 = require("../resultat/resultat.service");
let ResultatModule = class ResultatModule {
};
ResultatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([resultat_entity_1.Resultat])],
        controllers: [resultat_controller_1.ResultatController],
        providers: [resultat_service_1.ResultatService],
    })
], ResultatModule);
exports.ResultatModule = ResultatModule;
//# sourceMappingURL=resultat.module.js.map