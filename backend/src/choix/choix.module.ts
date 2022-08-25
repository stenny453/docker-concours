import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choix } from './entities/choix.entity';
import { ChoixController } from '../choix/choix.controller';
import { ChoixService } from '../choix/choix.service';

@Module({
    imports: [TypeOrmModule.forFeature([Choix])],
    controllers: [ChoixController],
    providers: [ChoixService],
})
export class ChoixModule { }