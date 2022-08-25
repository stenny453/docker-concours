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
exports.TypeCandidat = void 0;
const droit_entity_1 = require("../../droit/entities/droit.entity");
const typeorm_1 = require("typeorm");
let TypeCandidat = class TypeCandidat {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TypeCandidat.prototype, "codeTypeCand", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TypeCandidat.prototype, "libelleTypeCand", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => droit_entity_1.Droit, droit => droit.parametres),
    __metadata("design:type", Array)
], TypeCandidat.prototype, "params", void 0);
TypeCandidat = __decorate([
    (0, typeorm_1.Entity)('TypeCandidat')
], TypeCandidat);
exports.TypeCandidat = TypeCandidat;
//# sourceMappingURL=typeCandidat.entity.js.map