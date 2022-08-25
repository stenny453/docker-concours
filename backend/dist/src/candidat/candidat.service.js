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
exports.CandidatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const candidat_entity_1 = require("./entities/candidat.entity");
const typeorm_2 = require("typeorm");
let CandidatService = class CandidatService {
    constructor(candidatRepository) {
        this.candidatRepository = candidatRepository;
    }
    create(candidat) {
        return this.candidatRepository.save(this.candidatRepository.create(candidat));
    }
    findAll() {
        return this.candidatRepository.find();
    }
    findById(id) {
        return this.candidatRepository.findOne(id);
    }
    update(id, data) {
        return this.candidatRepository
            .createQueryBuilder()
            .update()
            .set({
            nom: data.nom,
            prenoms: data.prenoms,
            dateNaiss: data.dateNaiss,
            dateNaissExacte: data.dateNaissExacte,
            situationMatrimoniale: data.situationMatrimoniale,
            lieuNaissance: data.lieuNaissance,
            telephone: data.telephone,
            nomPere: data.nomPere,
            nomMere: data.nomMere,
            adresseParent: data.adresseParent,
            numCIN: data.numCIN,
            dateCIN: data.dateCIN,
            lieuCIN: data.lieuCIN,
            dateDuplicata: data.dateDuplicata,
            lieuDuplicata: data.lieuDuplicata,
            photo: data.photo,
            mel: data.mel,
            numBord: data.numBord,
            dateBord: data.dateBord,
            agenceBord: data.agenceBord,
            montantBord: data.montantBord,
            photoBord: data.photoBord,
            photoDiplome: data.photoDiplome,
            photoEtatCivil: data.photoEtatCivil,
            premierChoix: data.premierChoix,
            deuxiemeChoix: data.deuxiemeChoix,
            numBacc: data.numBacc
        })
            .where('numInscription = :id', { id })
            .execute();
    }
    delete(id) {
        return this.candidatRepository
            .createQueryBuilder()
            .delete()
            .from(candidat_entity_1.Candidat)
            .where('numInscription = :id', { id })
            .execute();
    }
    candidat(id) {
        return this.candidatRepository
            .createQueryBuilder('c')
            .leftJoinAndSelect('c.codeCentre', 'centreconcours')
            .leftJoinAndSelect('c.codeCentreBacc', 'centrebacc')
            .leftJoinAndSelect('c.codeTypeCand', 'typecandidat')
            .leftJoinAndSelect('c.codeSerie', 'serie')
            .leftJoinAndSelect('c.codeResultat', 'resultat')
            .where("c.numInscription = :cid", { cid: id })
            .getOne();
    }
};
CandidatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(candidat_entity_1.Candidat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CandidatService);
exports.CandidatService = CandidatService;
//# sourceMappingURL=candidat.service.js.map