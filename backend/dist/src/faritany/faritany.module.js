"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaritanyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const faritany_entity_1 = require("./entities/faritany.entity");
const faritany_controller_1 = require("../faritany/faritany.controller");
const faritany_service_1 = require("../faritany/faritany.service");
let FaritanyModule = class FaritanyModule {
};
FaritanyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([faritany_entity_1.Faritany])],
        controllers: [faritany_controller_1.FaritanyController],
        providers: [faritany_service_1.FaritanyService],
    })
], FaritanyModule);
exports.FaritanyModule = FaritanyModule;
//# sourceMappingURL=faritany.module.js.map