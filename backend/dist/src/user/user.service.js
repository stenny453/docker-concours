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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("./entities/user.entity");
const mail_service_1 = require("../mail/mail.service");
let UserService = class UserService {
    constructor(userRepository, jwtService, mailService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async register(userData) {
        const verifyEmail = await this.userRepository.findOne({
            email: userData.email,
        });
        if (verifyEmail) {
            return {
                message: "L'\tadresse email existe déjà",
                error: true,
                pseudo: true,
            };
        }
        const user = await this.userRepository.create(Object.assign({}, userData));
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        const payload = {
            id: user.id,
            email: user.email,
            role: user.role,
            firstname: user.firstname,
            lastname: user.lastname,
        };
        const jwt = await this.jwtService.sign(payload);
        await this.userRepository.save(user);
        try {
            await this.mailService.sendMessage({
                object: 'Nouveau compte',
                email: 'test@gmail.com',
                message: 'Votre Compte est crée',
                nom: 'myName'
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Une erreur s'est produite ", error);
        }
        finally {
            return payload;
        }
    }
    async login(credentials) {
        const { email, password } = credentials;
        const user = await this.userRepository
            .createQueryBuilder('user')
            .where('user.email = :email', {
            email,
        })
            .getOne();
        if (!user) {
            return {
                message: 'Email ou mot de passe erronée',
                error: true,
            };
        }
        const hashPassword = await bcrypt.hash(password, user.salt);
        if (hashPassword === user.password) {
            const payload = {
                id: user.id,
                email: user.email,
                role: user.role,
                firstname: user.firstname,
                lastname: user.lastname,
            };
            const jwt = await this.jwtService.sign(payload);
            return {
                access_token: jwt,
            };
        }
        else {
            return {
                message: 'Pseudo ou mot de passe erronée',
                error: true,
            };
        }
    }
    async changePassword(credentials, user) {
        const { oldPassword, newPassword } = credentials;
        const newUser = await this.userRepository.findOne(user);
        const hashPassword = await bcrypt.hash(oldPassword, newUser.salt);
        if (hashPassword === newUser.password) {
            newUser.salt = await bcrypt.genSalt();
            newUser.password = await bcrypt.hash(newPassword, newUser.salt);
            await this.userRepository.save(newUser);
            return {
                message: 'Mot de passe reinitialisé',
                success: true,
            };
        }
        else {
            return {
                message: 'Mot de passe erronée',
                error: true,
            };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        mail_service_1.MailService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map