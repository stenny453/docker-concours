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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_register_dto_1 = require("./dto/user-register.dto");
const user_entity_1 = require("./entities/user.entity");
const user_login_dto_1 = require("./dto/user-login.dto");
const user_decorator_1 = require("../decorators/user.decorator");
const user_auth_guard_1 = require("./guards/user-auth.guard");
const user_password_dto_1 = require("./dto/user-password.dto");
const config_1 = require("@nestjs/config");
const platform_express_1 = require("@nestjs/platform-express");
let UserController = class UserController {
    constructor(userService, configService) {
        this.userService = userService;
        this.configService = configService;
    }
    async register(userData) {
        return await this.userService.register(userData);
    }
    async login(credentials) {
        return await this.userService.login(credentials);
    }
    async changePassword(user, data) {
        return await this.userService.changePassword(data, user);
    }
    uploadFiles(files) {
        return {
            path_diploma: this.configService.get('PATH_UPLOAD') + files.diploma[0].filename,
            path_cin: this.configService.get('PATH_UPLOAD') + files.cin[0].filename,
            path_civil: this.configService.get('PATH_UPLOAD') + files.civil[0].filename,
        };
    }
    uploadAlbums(files) {
        const paths = [];
        for (let index = 0; index < files.length; index++) {
            paths.push(this.configService.get('PATH_UPLOAD') + files[index].filename);
        }
        return {
            paths: paths,
        };
    }
    updateProfile(file) {
        return {
            path: this.configService.get('PATH_UPLOAD') + file.filename,
        };
    }
    async verifyToken(data, user) {
        return {
            role: user.role,
        };
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_register_dto_1.UserRegisterDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Post)('changePassword'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        user_password_dto_1.UserPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('upload/albums'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'diploma', maxCount: 1 },
        { name: 'cin', maxCount: 1 },
        { name: 'civil', maxCount: 1 },
    ])),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "uploadFiles", null);
__decorate([
    (0, common_1.Post)('upload/photos'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "uploadAlbums", null);
__decorate([
    (0, common_1.Post)('upload/profile'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, common_1.Post)('verify_token'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyToken", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map