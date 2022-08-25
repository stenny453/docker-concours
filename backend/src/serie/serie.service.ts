import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Serie } from 'src/serie/entities/serie.entity';
import { Repository } from 'typeorm';
import { SerieInterface } from '../serie/interfaces/serie.interface';
@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(Serie)
    private serieRepository: Repository<SerieInterface>,
  ) { }
  create(serie: SerieInterface): Promise<SerieInterface> {
    return this.serieRepository.save(
      this.serieRepository.create(serie)
    );
  }
  findAll(): Promise<SerieInterface[]> {
    return this.serieRepository.find();
  }
  findById(id: number): Promise<SerieInterface> {
    return this.serieRepository.findOne(id);
  }
  update(id: string, data: any): Promise<any> {
    return this.serieRepository
      .createQueryBuilder()
      .update()
      .set({
        libelleSerie: data.libelleSerie
      })
      .where('CodeSerie = :id', { id })
      .execute()
  }
  delete(id: string): Promise<any> {
    return this.serieRepository
      .createQueryBuilder()
      .delete()
      .from(Serie)
      .where('CodeSerie = :id', { id })
      .execute()
  }
  serie(id: number): Promise<SerieInterface[]> {
    return this.serieRepository
      .createQueryBuilder("s")
      .leftJoinAndSelect("s.choix", "choix")
      .getMany();
  }
}
