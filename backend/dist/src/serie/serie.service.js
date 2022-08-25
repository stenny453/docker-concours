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
exports.SerieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const serie_entity_1 = require("./entities/serie.entity");
const typeorm_2 = require("typeorm");
let SerieService = class SerieService {
    constructor(serieRepository) {
        this.serieRepository = serieRepository;
    }
    create(serie) {
        return this.serieRepository.save(this.serieRepository.create(serie));
    }
    findAll() {
        return this.serieRepository.find();
    }
    findById(id) {
        return this.serieRepository.findOne(id);
    }
    update(id, data) {
        return this.serieRepository
            .createQueryBuilder()
            .update()
            .set({
            libelleSerie: data.libelleSerie
        })
            .where('CodeSerie = :id', { id })
            .execute();
    }
    delete(id) {
        return this.serieRepository
            .createQueryBuilder()
            .delete()
            .from(serie_entity_1.Serie)
            .where('CodeSerie = :id', { id })
            .execute();
    }
    serie(id) {
        return this.serieRepository
            .createQueryBuilder("s")
            .leftJoinAndSelect("s.choix", "choix")
            .getMany();
    }
};
SerieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(serie_entity_1.Serie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SerieService);
exports.SerieService = SerieService;
//# sourceMappingURL=serie.service.js.map