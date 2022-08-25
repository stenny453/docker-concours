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
exports.CentreBaccController = void 0;
const common_1 = require("@nestjs/common");
const centreBacc_service_1 = require("./centreBacc.service");
const user_auth_guard_1 = require("../user/guards/user-auth.guard");
let CentreBaccController = class CentreBaccController {
    constructor(centreBaccService) {
        this.centreBaccService = centreBaccService;
    }
    async create(createCentreBaccDto) {
        const centreBacc = await this.centreBaccService.create(createCentreBaccDto);
        if (!centreBacc) {
            return 'error in creating centreBacc';
        }
        return 'centreBacc created successfully';
    }
    async findAll(request) {
        const centreBacc = await this.centreBaccService.findAll();
        return centreBacc;
    }
    async findOne(id) {
        const centreConcours = await this.centreBaccService.findById(id);
        return centreConcours;
    }
    async update(id, body) {
        const newCentreBacc = await this.centreBaccService.update(id, body);
        return "centreBacc updated";
    }
    async remove(id) {
        await this.centreBaccService.delete(id);
        return "centreBacc deleted";
    }
};
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CentreBaccController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CentreBaccController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CentreBaccController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CentreBaccController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CentreBaccController.prototype, "remove", null);
CentreBaccController = __decorate([
    (0, common_1.Controller)('centrebacc'),
    __metadata("design:paramtypes", [centreBacc_service_1.CentreBaccService])
], CentreBaccController);
exports.CentreBaccController = CentreBaccController;
//# sourceMappingURL=centreBacc.controller.js.map