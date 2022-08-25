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
exports.TypeCandidatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeCandidat_entity_1 = require("./entities/typeCandidat.entity");
const typeorm_2 = require("typeorm");
let TypeCandidatService = class TypeCandidatService {
    constructor(typeCandidatRepository) {
        this.typeCandidatRepository = typeCandidatRepository;
    }
    create(typeCandidat) {
        return this.typeCandidatRepository.save(this.typeCandidatRepository.create(typeCandidat));
    }
    findAll() {
        return this.typeCandidatRepository.find();
    }
    findById(id) {
        return this.typeCandidatRepository.findOne(id);
    }
    update(id, data) {
        return this.typeCandidatRepository
            .createQueryBuilder()
            .update()
            .set({
            libelleTypeCand: data.libelleTypeCand
        })
            .where('CodeTypeCand = :id', { id })
            .execute();
    }
    delete(id) {
        return this.typeCandidatRepository.query(`DELETE FROM TypeCandidat WHERE CodeTypeCand = ${id}`);
    }
};
TypeCandidatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeCandidat_entity_1.TypeCandidat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeCandidatService);
exports.TypeCandidatService = TypeCandidatService;
//# sourceMappingURL=typeCandidat.service.js.map