import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parametres } from './entities/parametres.entity';
import { ParametresController } from '../parametres/parametres.controller';
import { ParametresService } from '../parametres/parametres.service';

@Module({
    imports: [TypeOrmModule.forFeature([Parametres])],
    controllers: [ParametresController],
    providers: [ParametresService],
})
export class ParametresModule { }