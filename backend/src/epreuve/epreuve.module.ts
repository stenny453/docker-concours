import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Epreuve } from 'src/epreuve/entities/epreuve.entity';
import { EpreuveController } from '../epreuve/epreuve.controller';
import { EpreuveSerivce } from '../epreuve/epreuve.service';
@Module({
  imports: [TypeOrmModule.forFeature([Epreuve])],
  controllers: [EpreuveController],
  providers: [EpreuveSerivce],
})
export class EpreuveModule { }
