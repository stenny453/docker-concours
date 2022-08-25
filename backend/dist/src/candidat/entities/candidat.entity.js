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
exports.Candidat = void 0;
const centreBacc_entity_1 = require("../../centreBacc/entities/centreBacc.entity");
const centreConcours_entity_1 = require("../../centreConcours/entities/centreConcours.entity");
const centreFormation_entity_1 = require("../../centreFormation/entities/centreFormation.entity");
const resultat_entity_1 = require("../../resultat/entities/resultat.entity");
const serie_entity_1 = require("../../serie/entities/serie.entity");
const typeCandidat_entity_1 = require("../../typeCandidat/entities/typeCandidat.entity");
const typeorm_1 = require("typeorm");
let Candidat = class Candidat {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Candidat.prototype, "numInscription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Candidat.prototype, "prenoms", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Date)
], Candidat.prototype, "dateNaiss", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Date)
], Candidat.prototype, "dateNaissExacte", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "situationMatrimoniale", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "lieuNaissance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Candidat.prototype, "nomPere", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "nomMere", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "adresseParent", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Candidat.prototype, "numCIN", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Date)
], Candidat.prototype, "dateCIN", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Candidat.prototype, "lieuCIN", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Date)
], Candidat.prototype, "dateDuplicata", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Candidat.prototype, "lieuDuplicata", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "mel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "numBord", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Candidat.prototype, "dateBord", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "agenceBord", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Candidat.prototype, "montantBord", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "photoBord", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Candidat.prototype, "photoDiplome", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Candidat.prototype, "photoEtatCivil", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "ficheRenseignement", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "demandeInscription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Candidat.prototype, "numBacc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => centreFormation_entity_1.CentreFormation, (centreFormation) => centreFormation.codeFormation, { nullable: true }),
    __metadata("design:type", centreFormation_entity_1.CentreFormation)
], Candidat.prototype, "premierChoix", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => centreFormation_entity_1.CentreFormation, (centreFormation) => centreFormation.codeFormation, { nullable: true }),
    __metadata("design:type", centreFormation_entity_1.CentreFormation)
], Candidat.prototype, "deuxiemeChoix", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => centreConcours_entity_1.CentreConcours, (centreConcours) => centreConcours.codeCentre, { nullable: true }),
    __metadata("design:type", centreConcours_entity_1.CentreConcours)
], Candidat.prototype, "codeCentre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => centreBacc_entity_1.CentreBacc, (centreBacc) => centreBacc.codeCentreBacc, { nullable: true }),
    __metadata("design:type", Number)
], Candidat.prototype, "codeCentreBacc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => typeCandidat_entity_1.TypeCandidat, (typeCandidat) => typeCandidat.codeTypeCand, { nullable: true }),
    __metadata("design:type", typeCandidat_entity_1.TypeCandidat)
], Candidat.prototype, "codeTypeCand", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => serie_entity_1.Serie, (serie) => serie.codeSerie, { nullable: true }),
    __metadata("design:type", serie_entity_1.Serie)
], Candidat.prototype, "codeSerie", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => resultat_entity_1.Resultat, (resultat) => resultat.codeResultat, { nullable: true }),
    __metadata("design:type", resultat_entity_1.Resultat)
], Candidat.prototype, "codeResultat", void 0);
Candidat = __decorate([
    (0, typeorm_1.Entity)('Candidat')
], Candidat);
exports.Candidat = Candidat;
//# sourceMappingURL=candidat.entity.js.map