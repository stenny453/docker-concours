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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpreuveSerivce = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const epreuve_entity_1 = require("./entities/epreuve.entity");
const typeorm_2 = require("typeorm");
let EpreuveSerivce = class EpreuveSerivce {
    constructor(epreuveRepository) {
        this.epreuveRepository = epreuveRepository;
    }
    create(epreuve) {
        return this.epreuveRepository.save(this.epreuveRepository.create(epreuve));
    }
    findAll() {
        return this.epreuveRepository.find();
    }
    findById(id) {
        return this.epreuveRepository.findOne(id);
    }
    update(id, data) {
        return this.epreuveRepository
            .createQueryBuilder()
            .update()
            .set({
            libelleEpreuve: data.libelleEpreuve,
            coef: data.coef,
            duree: data.duree,
            dateEpreuve: data.dateEpreuve
        })
            .where('codeEpreuve = :id', { id })
            .execute();
    }
    delete(id) {
        return this.epreuveRepository
            .createQueryBuilder()
            .delete()
            .from(epreuve_entity_1.Epreuve)
            .where('codeEpreuve = :id', { id })
            .execute();
    }
};
EpreuveSerivce = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(epreuve_entity_1.Epreuve)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EpreuveSerivce);
exports.EpreuveSerivce = EpreuveSerivce;
//# sourceMappingURL=epreuve.service.js.map