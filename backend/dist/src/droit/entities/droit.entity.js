"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Droit = void 0;
const parametres_entity_1 = require("../../parametres/entities/parametres.entity");
const typeCandidat_entity_1 = require("../../typeCandidat/entities/typeCandidat.entity");
const typeorm_1 = require("typeorm");
let Droit = class Droit {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Droit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Droit.prototype, "droitConcours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Droit.prototype, "fraisScolaire", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => parametres_entity_1.Parametres, (parametres) => parametres.id),
    __metadata("design:type", parametres_entity_1.Parametres)
], Droit.prototype, "parametres", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => typeCandidat_entity_1.TypeCandidat, (typeCandidat) => typeCandidat.codeTypeCand),
    __metadata("design:type", typeCandidat_entity_1.TypeCandidat)
], Droit.prototype, "typeCandidat", void 0);
Droit = __decorate([
    (0, typeorm_1.Entity)('Droit')
], Droit);
exports.Droit = Droit;
//# sourceMappingURL=droit.entity.js.map