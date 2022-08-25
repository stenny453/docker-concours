"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoixModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const choix_entity_1 = require("./entities/choix.entity");
const choix_controller_1 = require("../choix/choix.controller");
const choix_service_1 = require("../choix/choix.service");
let ChoixModule = class ChoixModule {
};
ChoixModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([choix_entity_1.Choix])],
        controllers: [choix_controller_1.ChoixController],
        providers: [choix_service_1.ChoixService],
    })
], ChoixModule);
exports.ChoixModule = ChoixModule;
//# sourceMappingURL=choix.module.js.map