import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Serie } from 'src/serie/entities/serie.entity';
import { SerieController } from '../serie/serie.controller';
import { SerieService } from '../serie/serie.service';
@Module({
  imports: [TypeOrmModule.forFeature([Serie])],
  controllers: [SerieController],
  providers: [SerieService],
})
export class SerieModule { }
