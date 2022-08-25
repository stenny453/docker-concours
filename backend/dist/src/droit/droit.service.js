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
exports.DroitService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const droit_entity_1 = require("./entities/droit.entity");
const typeorm_2 = require("typeorm");
let DroitService = class DroitService {
    constructor(droitRepository) {
        this.droitRepository = droitRepository;
    }
    create(droit) {
        return this.droitRepository.save(this.droitRepository.create(droit));
    }
    findAll() {
        return this.droitRepository.find();
    }
    findById(id) {
        return this.droitRepository.findOne(id);
    }
    update(id, data) {
        return this.droitRepository
            .createQueryBuilder()
            .update()
            .set({
            droitConcours: data.droitConcours,
            fraisScolaire: data.fraisScolaire,
        })
            .where('id = :id', { id })
            .execute();
    }
    delete(id) {
        return this.droitRepository
            .createQueryBuilder()
            .delete()
            .from(droit_entity_1.Droit)
            .where('id = :id', { id })
            .execute();
    }
    droitWithParametreAndTypeCandidat(id) {
        return this.droitRepository
            .createQueryBuilder('d')
            .leftJoinAndSelect('d.parametres', 'parametres')
            .leftJoinAndSelect('d.typeCandidat', 'typeCandidat')
            .where("d.id = :pid", { pid: id })
            .getOne();
    }
};
DroitService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(droit_entity_1.Droit)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DroitService);
exports.DroitService = DroitService;
//# sourceMappingURL=droit.service.js.map