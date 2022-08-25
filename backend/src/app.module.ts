import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppSocket } from './app.socket';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { MailModule } from './mail/mail.module';
import { UserModule } from './user/user.module';
import { SerieModule } from './serie/serie.module';
import { CentreConcoursModule } from './centreConcours/centreConcours.module';
import { CentreBaccModule } from './centreBacc/centreBacc.module';
import { FaritanyModule } from './faritany/faritany.module';
import { ChoixModule } from './choix/choix.module';
import { ParametresModule } from './parametres/parametres.module';
import { DroitModule } from './droit/droit.module';
import { TypeCandidatModule } from './typeCandidat/typeCandidat.module';
import { EpreuveModule } from './epreuve/epreuve.module';
import { ResultatModule } from './resultat/resultat.module';
import { ComposerModule } from './composer/composer.module';
import { CandidatModule } from './candidat/candidat.module';
import { SMSModule } from './sms/sms.module';
import { CentreFormationModule } from './centreFormation/centreFormation.module';
import * as multer from 'multer';

dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // type: 'postgres',
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
      synchronize: true, // false in Production
      // migrationsRun: true // utiliser migration au lieu de synchronize pour éviter l'erreur de creation de tables
    }),
    MulterModule.register({
      dest: './upload'
    }),
    MailModule,
    UserModule,
    SerieModule,
    CentreConcoursModule,
    CentreBaccModule,
    FaritanyModule,
    ChoixModule,
    ParametresModule,
    DroitModule,
    TypeCandidatModule,
    EpreuveModule,
    ResultatModule,
    ComposerModule,
    CandidatModule,
    CentreFormationModule,
    SMSModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppSocket],
})
export class AppModule { }
