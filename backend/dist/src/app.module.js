"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const app_socket_1 = require("./app.socket");
const platform_express_1 = require("@nestjs/platform-express");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = require("dotenv");
const mail_module_1 = require("./mail/mail.module");
const user_module_1 = require("./user/user.module");
const serie_module_1 = require("./serie/serie.module");
const centreConcours_module_1 = require("./centreConcours/centreConcours.module");
const centreBacc_module_1 = require("./centreBacc/centreBacc.module");
const faritany_module_1 = require("./faritany/faritany.module");
const choix_module_1 = require("./choix/choix.module");
const parametres_module_1 = require("./parametres/parametres.module");
const droit_module_1 = require("./droit/droit.module");
const typeCandidat_module_1 = require("./typeCandidat/typeCandidat.module");
const epreuve_module_1 = require("./epreuve/epreuve.module");
const resultat_module_1 = require("./resultat/resultat.module");
const composer_module_1 = require("./composer/composer.module");
const candidat_module_1 = require("./candidat/candidat.module");
const sms_module_1 = require("./sms/sms.module");
const centreFormation_module_1 = require("./centreFormation/centreFormation.module");
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: ['dist/**/*.entity{.ts,.js}'],
                migrationsTableName: "custom_migration_table",
                migrations: ["migration/*.js"],
                cli: {
                    "migrationsDir": "migration"
                },
                synchronize: true,
            }),
            platform_express_1.MulterModule.register({
                dest: './upload'
            }),
            mail_module_1.MailModule,
            user_module_1.UserModule,
            serie_module_1.SerieModule,
            centreConcours_module_1.CentreConcoursModule,
            centreBacc_module_1.CentreBaccModule,
            faritany_module_1.FaritanyModule,
            choix_module_1.ChoixModule,
            parametres_module_1.ParametresModule,
            droit_module_1.DroitModule,
            typeCandidat_module_1.TypeCandidatModule,
            epreuve_module_1.EpreuveModule,
            resultat_module_1.ResultatModule,
            composer_module_1.ComposerModule,
            candidat_module_1.CandidatModule,
            centreFormation_module_1.CentreFormationModule,
            sms_module_1.SMSModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_socket_1.AppSocket],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map