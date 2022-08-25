import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultat } from 'src/resultat/entities/resultat.entity';
import { ResultatController } from '../resultat/resultat.controller';
import { ResultatService } from '../resultat/resultat.service';
@Module({
  imports: [TypeOrmModule.forFeature([Resultat])],
  controllers: [ResultatController],
  providers: [ResultatService],
})
export class ResultatModule { }
