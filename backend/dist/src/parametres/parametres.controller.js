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
exports.ParametresController = void 0;
const common_1 = require("@nestjs/common");
const parametres_service_1 = require("./parametres.service");
const user_auth_guard_1 = require("../user/guards/user-auth.guard");
let ParametresController = class ParametresController {
    constructor(parametresService) {
        this.parametresService = parametresService;
    }
    async create(createParametresDto) {
        const choix = await this.parametresService.create(createParametresDto);
        if (!choix) {
            return 'error in creating parametres';
        }
        return 'parametres created successfully';
    }
    async findAll(request) {
        const parametres = await this.parametresService.findAll();
        return parametres;
    }
    async findOne(id) {
        const choix = await this.parametresService.findById(id);
        return choix;
    }
    async update(id, body) {
        const newChoix = await this.parametresService.update(id, body);
        return "parametres updated";
    }
    async remove(id) {
        await this.parametresService.delete(id);
        return "parametres deleted";
    }
};
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParametresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParametresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ParametresController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ParametresController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParametresController.prototype, "remove", null);
ParametresController = __decorate([
    (0, common_1.Controller)('parametres'),
    __metadata("design:paramtypes", [parametres_service_1.ParametresService])
], ParametresController);
exports.ParametresController = ParametresController;
//# sourceMappingURL=parametres.controller.js.map