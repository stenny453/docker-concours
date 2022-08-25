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
exports.ComposerController = void 0;
const common_1 = require("@nestjs/common");
const composer_service_1 = require("./composer.service");
const user_auth_guard_1 = require("../user/guards/user-auth.guard");
let ComposerController = class ComposerController {
    constructor(composerService) {
        this.composerService = composerService;
    }
    async create(createComposerDto) {
        const composer = await this.composerService.create(createComposerDto);
        if (!composer) {
            return 'error in creating composer';
        }
        return 'composer created successfully';
    }
    async findAll(request) {
        const composer = await this.composerService.findAll();
        return composer;
    }
    async findOne(id) {
        const composer = await this.composerService.findById(id);
        return composer;
    }
    async update(id, body) {
        const newComposer = await this.composerService.update(id, body);
        return "composer updated";
    }
    async remove(id) {
        await this.composerService.delete(id);
        return "composer deleted";
    }
    async getComposer(id) {
        const composer = await this.composerService.composer(id);
        return composer;
    }
    async getCandidatNotes(id) {
        const notes = await this.composerService.candidatNotes(id);
        return notes;
    }
};
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComposerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComposerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComposerController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ComposerController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComposerController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('relation/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComposerController.prototype, "getComposer", null);
__decorate([
    (0, common_1.Get)('notesCandidat/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComposerController.prototype, "getCandidatNotes", null);
ComposerController = __decorate([
    (0, common_1.Controller)('composer'),
    __metadata("design:paramtypes", [composer_service_1.ComposerService])
], ComposerController);
exports.ComposerController = ComposerController;
//# sourceMappingURL=composer.controller.js.map