import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Epreuve } from 'src/epreuve/entities/epreuve.entity';
import { Repository } from 'typeorm';
import { EpreuveInterface } from '../epreuve/interfaces/epreuve.interface';
@Injectable()
export class EpreuveSerivce {
  constructor(
    @InjectRepository(Epreuve)
    private epreuveRepository: Repository<EpreuveInterface>,
  ) { }
  create(epreuve: EpreuveInterface): Promise<EpreuveInterface> {
    return this.epreuveRepository.save(
      this.epreuveRepository.create(epreuve)
    );
  }
  findAll(): Promise<EpreuveInterface[]> {
    return this.epreuveRepository.find();
  }
  findById(id: number): Promise<EpreuveInterface> {
    return this.epreuveRepository.findOne(id);
  }
  update(id: string, data: any): Promise<any> {
    return this.epreuveRepository
      .createQueryBuilder()
      .update()
      .set({
        libelleEpreuve: data.libelleEpreuve,
        coef: data.coef,
        duree: data.duree,
        dateEpreuve: data.dateEpreuve
      })
      .where('codeEpreuve = :id', { id })
      .execute()
  }
  delete(id: string): Promise<any> {
    return this.epreuveRepository
      .createQueryBuilder()
      .delete()
      .from(Epreuve)
      .where('codeEpreuve = :id', { id })
      .execute()
  }
}
