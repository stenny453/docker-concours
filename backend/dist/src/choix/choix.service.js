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
exports.ChoixService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const choix_entity_1 = require("./entities/choix.entity");
const typeorm_2 = require("typeorm");
let ChoixService = class ChoixService {
    constructor(choixRepository) {
        this.choixRepository = choixRepository;
    }
    create(choix) {
        return this.choixRepository.save(this.choixRepository.create(choix));
    }
    findAll() {
        return this.choixRepository.find();
    }
    findById(id) {
        return this.choixRepository.findOne(id);
    }
    update(id, data) {
        return this.choixRepository
            .createQueryBuilder()
            .update()
            .set({
            libelleChoix: data.libelleChoix,
            limiteAge: data.limiteAge,
            limiteBacc: data.limiteBacc,
            nbPlaces: data.nbPlaces,
            nbListeAttente: data.nbListeAttente,
        })
            .where('codeChoix = :id', { id })
            .execute();
    }
    delete(id) {
        return this.choixRepository
            .createQueryBuilder()
            .delete()
            .from(choix_entity_1.Choix)
            .where('codeChoix = :id', { id })
            .execute();
    }
};
ChoixService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(choix_entity_1.Choix)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChoixService);
exports.ChoixService = ChoixService;
//# sourceMappingURL=choix.service.js.map