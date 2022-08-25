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
exports.Choix = void 0;
const epreuve_entity_1 = require("../../epreuve/entities/epreuve.entity");
const parametres_entity_1 = require("../../parametres/entities/parametres.entity");
const serie_entity_1 = require("../../serie/entities/serie.entity");
const typeorm_1 = require("typeorm");
let Choix = class Choix {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Choix.prototype, "codeChoix", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Choix.prototype, "libelleChoix", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Choix.prototype, "limiteAge", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Choix.prototype, "limiteBacc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Choix.prototype, "nbPlaces", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Choix.prototype, "nbListeAttente", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => serie_entity_1.Serie, (serie) => serie.choix),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Choix.prototype, "series", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => epreuve_entity_1.Epreuve, (epreuve) => epreuve.choix),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Choix.prototype, "epreuves", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => parametres_entity_1.Parametres, (parametres) => parametres.choix),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Choix.prototype, "parametres", void 0);
Choix = __decorate([
    (0, typeorm_1.Entity)('Choix')
], Choix);
exports.Choix = Choix;
//# sourceMappingURL=choix.entity.js.map