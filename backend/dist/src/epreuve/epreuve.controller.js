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
exports.EpreuveController = void 0;
const common_1 = require("@nestjs/common");
const epreuve_service_1 = require("./epreuve.service");
const user_auth_guard_1 = require("../user/guards/user-auth.guard");
let EpreuveController = class EpreuveController {
    constructor(epreuveService) {
        this.epreuveService = epreuveService;
    }
    async create(createEpreuveDto) {
        const epreuve = await this.epreuveService.create(createEpreuveDto);
        if (!epreuve) {
            return 'error in creating epreuve';
        }
        return 'epreuve created successfully';
    }
    async findAll(request) {
        const epreuves = await this.epreuveService.findAll();
        return epreuves;
    }
    async findOne(id) {
        const epreuve = await this.epreuveService.findById(id);
        return epreuve;
    }
    async update(id, body) {
        const newEpreuve = await this.epreuveService.update(id, body);
        return "epreuve updated";
    }
    async remove(id) {
        await this.epreuveService.delete(id);
        return "epreuve deleted";
    }
};
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EpreuveController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EpreuveController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EpreuveController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EpreuveController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EpreuveController.prototype, "remove", null);
EpreuveController = __decorate([
    (0, common_1.Controller)('epreuve'),
    __metadata("design:paramtypes", [epreuve_service_1.EpreuveSerivce])
], EpreuveController);
exports.EpreuveController = EpreuveController;
//# sourceMappingURL=epreuve.controller.js.map