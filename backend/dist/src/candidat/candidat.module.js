"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const candidat_entity_1 = require("./entities/candidat.entity");
const candidat_controller_1 = require("../candidat/candidat.controller");
const candidat_service_1 = require("../candidat/candidat.service");
let CandidatModule = class CandidatModule {
};
CandidatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([candidat_entity_1.Candidat])],
        controllers: [candidat_controller_1.CandidatController],
        providers: [candidat_service_1.CandidatService],
    })
], CandidatModule);
exports.CandidatModule = CandidatModule;
//# sourceMappingURL=candidat.module.js.map