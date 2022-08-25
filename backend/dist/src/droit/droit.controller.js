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
exports.DroitController = void 0;
const common_1 = require("@nestjs/common");
const droit_service_1 = require("./droit.service");
const user_auth_guard_1 = require("../user/guards/user-auth.guard");
let DroitController = class DroitController {
    constructor(droitService) {
        this.droitService = droitService;
    }
    async create(createDroitDto) {
        const droit = await this.droitService.create(createDroitDto);
        if (!droit) {
            return 'error in creating droit';
        }
        return 'droit created successfully';
    }
    async findAll(request) {
        const droit = await this.droitService.findAll();
        return droit;
    }
    async findOne(id) {
        const droit = await this.droitService.findById(id);
        return droit;
    }
    async update(id, body) {
        const newDroit = await this.droitService.update(id, body);
        return "droit updated";
    }
    async remove(id) {
        await this.droitService.delete(id);
        return "droit deleted";
    }
    async droitWithParametreAndTypeCandidat(id) {
        const droit = await this.droitService.droitWithParametreAndTypeCandidat(id);
        return droit;
    }
};
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DroitController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DroitController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DroitController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DroitController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DroitController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('relation/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DroitController.prototype, "droitWithParametreAndTypeCandidat", null);
DroitController = __decorate([
    (0, common_1.Controller)('droit'),
    __metadata("design:paramtypes", [droit_service_1.DroitService])
], DroitController);
exports.DroitController = DroitController;
//# sourceMappingURL=droit.controller.js.map