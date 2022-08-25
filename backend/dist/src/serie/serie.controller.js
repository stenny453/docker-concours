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
exports.SerieController = void 0;
const common_1 = require("@nestjs/common");
const serie_service_1 = require("./serie.service");
const user_auth_guard_1 = require("../user/guards/user-auth.guard");
let SerieController = class SerieController {
    constructor(serieService) {
        this.serieService = serieService;
    }
    async create(createSerieDto) {
        const serie = await this.serieService.create(createSerieDto);
        if (!serie) {
            return 'error in creating serie';
        }
        return 'serie created successfully';
    }
    async findAll(request) {
        const series = await this.serieService.findAll();
        return series;
    }
    async findOne(id) {
        const serie = await this.serieService.findById(id);
        return serie;
    }
    async update(id, body) {
        const newSerie = await this.serieService.update(id, body);
        return "serie updated";
    }
    async remove(id) {
        await this.serieService.delete(id);
        return "serie deleted";
    }
    async getSerie(id) {
        const serie = await this.serieService.serie(id);
        return serie;
    }
};
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SerieController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SerieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SerieController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SerieController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SerieController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('relation/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SerieController.prototype, "getSerie", null);
SerieController = __decorate([
    (0, common_1.Controller)('series'),
    __metadata("design:paramtypes", [serie_service_1.SerieService])
], SerieController);
exports.SerieController = SerieController;
//# sourceMappingURL=serie.controller.js.map