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
exports.ParametresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const parametres_entity_1 = require("./entities/parametres.entity");
const typeorm_2 = require("typeorm");
let ParametresService = class ParametresService {
    constructor(parametresRepository) {
        this.parametresRepository = parametresRepository;
    }
    create(parametres) {
        return this.parametresRepository.save(this.parametresRepository.create(parametres));
    }
    findAll() {
        return this.parametresRepository.find();
    }
    findById(id) {
        return this.parametresRepository.findOne(id);
    }
    update(id, data) {
        return this.parametresRepository
            .createQueryBuilder()
            .update()
            .set({
            anneeUniv: data.anneeUniv,
            dateConcours: data.dateConcours,
            dateOuvertureInscription: data.dateOuvertureInscription,
            dateFermetureInscription: data.dateFermetureInscription
        })
            .where('id = :id', { id })
            .execute();
    }
    delete(id) {
        return this.parametresRepository
            .createQueryBuilder()
            .delete()
            .from(parametres_entity_1.Parametres)
            .where('id = :id', { id })
            .execute();
    }
};
ParametresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parametres_entity_1.Parametres)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParametresService);
exports.ParametresService = ParametresService;
//# sourceMappingURL=parametres.service.js.map