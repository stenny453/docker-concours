import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeCandidat } from './entities/typeCandidat.entity';
import { TypeCandidatController } from '../typeCandidat/typeCandidat.controller';
import { TypeCandidatService } from '../typeCandidat/typeCandidat.service';

@Module({
    imports: [TypeOrmModule.forFeature([TypeCandidat])],
    controllers: [TypeCandidatController],
    providers: [TypeCandidatService],
})
export class TypeCandidatModule { }