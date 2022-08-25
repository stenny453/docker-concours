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
exports.Parametres = void 0;
const choix_entity_1 = require("../../choix/entities/choix.entity");
const droit_entity_1 = require("../../droit/entities/droit.entity");
const typeorm_1 = require("typeorm");
let Parametres = class Parametres {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Parametres.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parametres.prototype, "anneeUniv", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Date)
], Parametres.prototype, "dateConcours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Parametres.prototype, "dateOuvertureInscription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Parametres.prototype, "dateFermetureInscription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parametres.prototype, "numCpteENI", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => droit_entity_1.Droit, droit => droit.parametres),
    __metadata("design:type", Array)
], Parametres.prototype, "params", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => choix_entity_1.Choix, (choix) => choix.parametres),
    __metadata("design:type", Array)
], Parametres.prototype, "choix", void 0);
Parametres = __decorate([
    (0, typeorm_1.Entity)('Parametres')
], Parametres);
exports.Parametres = Parametres;
//# sourceMappingURL=parametres.entity.js.map