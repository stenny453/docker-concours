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
exports.ChoixController = void 0;
const common_1 = require("@nestjs/common");
const choix_service_1 = require("./choix.service");
const user_auth_guard_1 = require("../user/guards/user-auth.guard");
let ChoixController = class ChoixController {
    constructor(choixService) {
        this.choixService = choixService;
    }
    async create(createChoixDto) {
        const choix = await this.choixService.create(createChoixDto);
        if (!choix) {
            return 'error in creating choix';
        }
        return 'choix created successfully';
    }
    async findAll(request) {
        const choix = await this.choixService.findAll();
        return choix;
    }
    async findOne(id) {
        const choix = await this.choixService.findById(id);
        return choix;
    }
    async update(id, body) {
        const newChoix = await this.choixService.update(id, body);
        return "choix updated";
    }
    async remove(id) {
        await this.choixService.delete(id);
        return "choix deleted";
    }
};
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChoixController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChoixController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChoixController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ChoixController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChoixController.prototype, "remove", null);
ChoixController = __decorate([
    (0, common_1.Controller)('choix'),
    __metadata("design:paramtypes", [choix_service_1.ChoixService])
], ChoixController);
exports.ChoixController = ChoixController;
//# sourceMappingURL=choix.controller.js.map