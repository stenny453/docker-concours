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
exports.ComposerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const composer_entity_1 = require("./entities/composer.entity");
const typeorm_2 = require("typeorm");
let ComposerService = class ComposerService {
    constructor(composerRepository) {
        this.composerRepository = composerRepository;
    }
    create(composer) {
        return this.composerRepository.save(this.composerRepository.create(composer));
    }
    findAll() {
        return this.composerRepository.find();
    }
    findById(id) {
        return this.composerRepository.findOne(id);
    }
    update(id, data) {
        return this.composerRepository
            .createQueryBuilder()
            .update()
            .set({
            Presence: data.Presence,
            Note: data.Note
        })
            .where('id = :id', { id })
            .execute();
    }
    delete(id) {
        return this.composerRepository
            .createQueryBuilder()
            .delete()
            .from(composer_entity_1.Composer)
            .where('id = :id', { id })
            .execute();
    }
    composer(id) {
        return this.composerRepository
            .createQueryBuilder('c')
            .leftJoinAndSelect('c.numInscription', 'candidat')
            .leftJoinAndSelect('c.codeEpreuve', 'epreuve')
            .where("c.id = :pid", { pid: id })
            .getOne();
    }
    candidatNotes(id) {
        return this.composerRepository
            .createQueryBuilder('c')
            .leftJoinAndSelect('c.numInscription', 'candidat')
            .leftJoinAndSelect('c.codeEpreuve', 'epreuve')
            .where("c.numInscriptionnumInscription = :cid", { cid: id })
            .getMany();
    }
};
ComposerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(composer_entity_1.Composer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ComposerService);
exports.ComposerService = ComposerService;
//# sourceMappingURL=composer.service.js.map