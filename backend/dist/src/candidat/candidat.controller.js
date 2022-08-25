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
exports.CandidatController = void 0;
const common_1 = require("@nestjs/common");
const candidat_service_1 = require("./candidat.service");
const user_auth_guard_1 = require("../user/guards/user-auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let CandidatController = class CandidatController {
    constructor(candidatService) {
        this.candidatService = candidatService;
    }
    async create(createCandidatDto, files) {
        let mimetypes = "jpeg png pdf";
        files.forEach(f => {
            if (f.fieldname == 'photo') {
                createCandidatDto.photo = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new common_1.HttpException('Bad request', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            else if (f.fieldname == 'photoBord') {
                createCandidatDto.photoBord = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new common_1.HttpException('Bad request', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            else if (f.fieldname == 'photoDiplome') {
                createCandidatDto.photoDiplome = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new common_1.HttpException('Bad request', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            else if (f.fieldname == 'photoEtatCivil') {
                createCandidatDto.photoEtatCivil = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new common_1.HttpException('Bad request', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            else if (f.fieldname == 'ficheRenseignement') {
                createCandidatDto.ficheRenseignement = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new common_1.HttpException('Bad request', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            else if (f.fieldname == 'demandeInscription') {
                createCandidatDto.demandeInscription = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new common_1.HttpException('Bad request', common_1.HttpStatus.BAD_REQUEST);
                }
            }
        });
        if (createCandidatDto.dateNaissExacte == null) {
            createCandidatDto.dateNaissExacte = null;
        }
        else if (createCandidatDto.dateNaiss == null) {
            createCandidatDto.dateNaiss = null;
        }
        if (createCandidatDto.photo && createCandidatDto.photoBord && createCandidatDto.ficheRenseignement && createCandidatDto.photoEtatCivil && createCandidatDto.demandeInscription) {
            const candidat = await this.candidatService.create(createCandidatDto);
            if (!candidat) {
                throw new common_1.HttpException('Bad request', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('candidat created successfully', common_1.HttpStatus.CREATED);
        }
        else {
            throw new common_1.HttpException('Bad request', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll(request) {
        const candidats = await this.candidatService.findAll();
        return candidats;
    }
    async findOne(id) {
        const candidat = await this.candidatService.findById(id);
        return candidat;
    }
    async update(id, body) {
        const newCandidat = await this.candidatService.update(id, body);
        return "candidat updated";
    }
    async remove(id) {
        await this.candidatService.delete(id);
        return "candidat deleted";
    }
    async getCandidat(id) {
        const candidat = await this.candidatService.candidat(id);
        return candidat;
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => cb(null, (0, path_1.resolve)('.', 'public', 'upload')),
            filename: (req, files, cb) => cb(null, files.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + files.mimetype.split('/')[1])
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], CandidatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CandidatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CandidatController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CandidatController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('relation/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CandidatController.prototype, "getCandidat", null);
CandidatController = __decorate([
    (0, common_1.Controller)('candidat'),
    __metadata("design:paramtypes", [candidat_service_1.CandidatService])
], CandidatController);
exports.CandidatController = CandidatController;
//# sourceMappingURL=candidat.controller.js.map