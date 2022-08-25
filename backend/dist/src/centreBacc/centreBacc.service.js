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
exports.CentreBaccService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const centreBacc_entity_1 = require("./entities/centreBacc.entity");
const typeorm_2 = require("typeorm");
let CentreBaccService = class CentreBaccService {
    constructor(centreConcoursRepository) {
        this.centreConcoursRepository = centreConcoursRepository;
    }
    create(centreConcours) {
        return this.centreConcoursRepository.save(this.centreConcoursRepository.create(centreConcours));
    }
    findAll() {
        return this.centreConcoursRepository.find();
    }
    findById(id) {
        return this.centreConcoursRepository.findOne(id);
    }
    update(id, data) {
        return this.centreConcoursRepository
            .createQueryBuilder()
            .update()
            .set({
            nomCentreBacc: data.nomCentreBacc,
            codeFaritany: data.codeFaritany
        })
            .where('codeCentreBacc = :id', { id })
            .execute();
    }
    delete(id) {
        return this.centreConcoursRepository
            .createQueryBuilder()
            .delete()
            .from(centreBacc_entity_1.CentreBacc)
            .where('codeCentreBacc = :id', { id })
            .execute();
    }
};
CentreBaccService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(centreBacc_entity_1.CentreBacc)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CentreBaccService);
exports.CentreBaccService = CentreBaccService;
//# sourceMappingURL=centreBacc.service.js.map