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
exports.Epreuve = void 0;
const choix_entity_1 = require("../../choix/entities/choix.entity");
const typeorm_1 = require("typeorm");
let Epreuve = class Epreuve {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Epreuve.prototype, "codeEpreuve", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Epreuve.prototype, "libelleEpreuve", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Epreuve.prototype, "coef", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Epreuve.prototype, "duree", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Epreuve.prototype, "dateEpreuve", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => choix_entity_1.Choix, (choix) => choix.epreuves),
    __metadata("design:type", Array)
], Epreuve.prototype, "choix", void 0);
Epreuve = __decorate([
    (0, typeorm_1.Entity)('Epreuve')
], Epreuve);
exports.Epreuve = Epreuve;
//# sourceMappingURL=epreuve.entity.js.map