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
exports.CentreConcoursController = void 0;
const common_1 = require("@nestjs/common");
const centreConcours_service_1 = require("./centreConcours.service");
const user_auth_guard_1 = require("../user/guards/user-auth.guard");
let CentreConcoursController = class CentreConcoursController {
    constructor(centreConcoursService) {
        this.centreConcoursService = centreConcoursService;
    }
    async create(createCentreConcoursDto) {
        const centreConcours = await this.centreConcoursService.create(createCentreConcoursDto);
        if (!centreConcours) {
            return 'error in creating centreConcours';
        }
        return 'centreConcours created successfully';
    }
    async findAll(request) {
        const centreConcours = await this.centreConcoursService.findAll();
        return centreConcours;
    }
    async findOne(id) {
        const centreConcours = await this.centreConcoursService.findById(id);
        return centreConcours;
    }
    async update(id, body) {
        const newCentreConcours = await this.centreConcoursService.update(id, body);
        return "centreConcours updated";
    }
    async remove(id) {
        await this.centreConcoursService.delete(id);
        return "centreConcours deleted";
    }
};
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CentreConcoursController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CentreConcoursController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CentreConcoursController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CentreConcoursController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CentreConcoursController.prototype, "remove", null);
CentreConcoursController = __decorate([
    (0, common_1.Controller)('centreconcours'),
    __metadata("design:paramtypes", [centreConcours_service_1.CentreConcoursService])
], CentreConcoursController);
exports.CentreConcoursController = CentreConcoursController;
//# sourceMappingURL=centreConcours.controller.js.map