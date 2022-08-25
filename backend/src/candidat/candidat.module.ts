import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidat } from 'src/candidat/entities/candidat.entity';
import { CandidatController } from '../candidat/candidat.controller';
import { CandidatService } from '../candidat/candidat.service';
@Module({
  imports: [TypeOrmModule.forFeature([Candidat])],
  controllers: [CandidatController],
  providers: [CandidatService],
})
export class CandidatModule { }
