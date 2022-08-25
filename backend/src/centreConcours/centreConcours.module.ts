import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentreConcours } from 'src/centreConcours/entities/centreConcours.entity';
import { CentreConcoursController } from '../centreConcours/centreConcours.controller';
import { CentreConcoursService } from '../centreConcours/centreConcours.service';
@Module({
    imports: [TypeOrmModule.forFeature([CentreConcours])],
    controllers: [CentreConcoursController],
    providers: [CentreConcoursService],
})
export class CentreConcoursModule { }