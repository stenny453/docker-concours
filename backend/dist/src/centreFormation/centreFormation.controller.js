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
exports.CentreFormationController = void 0;
const common_1 = require("@nestjs/common");
const centreFormation_service_1 = require("./centreFormation.service");
const user_auth_guard_1 = require("../user/guards/user-auth.guard");
let CentreFormationController = class CentreFormationController {
    constructor(centreFormationService) {
        this.centreFormationService = centreFormationService;
    }
    async create(createCentreFormationDto) {
        const centreFormation = await this.centreFormationService.create(createCentreFormationDto);
        if (!centreFormation) {
            return 'error in creating centreFormation';
        }
        return 'centreFormation created successfully';
    }
    async findAll(request) {
        const centreFormation = await this.centreFormationService.findAll();
        return centreFormation;
    }
    async findOne(id) {
        const centreFormation = await this.centreFormationService.findById(id);
        return centreFormation;
    }
    async update(id, body) {
        const newCentreFormation = await this.centreFormationService.update(id, body);
        return "centreFormation updated";
    }
    async remove(id) {
        await this.centreFormationService.delete(id);
        return "centreFormation deleted";
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CentreFormationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CentreFormationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CentreFormationController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CentreFormationController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CentreFormationController.prototype, "remove", null);
CentreFormationController = __decorate([
    (0, common_1.Controller)('centreformation'),
    __metadata("design:paramtypes", [centreFormation_service_1.CentreFormationService])
], CentreFormationController);
exports.CentreFormationController = CentreFormationController;
//# sourceMappingURL=centreFormation.controller.js.map