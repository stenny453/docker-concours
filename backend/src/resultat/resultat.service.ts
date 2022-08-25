import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Resultat } from 'src/resultat/entities/resultat.entity';
import { Repository } from 'typeorm';
import { ResultatInterface } from '../resultat/interfaces/resultat.interface';
@Injectable()
export class ResultatService {
  constructor(
    @InjectRepository(Resultat)
    private resultatRepository: Repository<ResultatInterface>,
  ) { }
  create(resultat: ResultatInterface): Promise<ResultatInterface> {
    return this.resultatRepository.save(
      this.resultatRepository.create(resultat)
    );
  }
  findAll(): Promise<ResultatInterface[]> {
    return this.resultatRepository.find();
  }
  findById(id: number): Promise<ResultatInterface> {
    return this.resultatRepository.findOne(id);
  }
  update(id: string, data: any): Promise<any> {
    return this.resultatRepository
      .createQueryBuilder()
      .update()
      .set({
        libelleResultat: data.libelleResultat
      })
      .where('codeResultat = :id', { id })
      .execute()
  }
  delete(id: string): Promise<any> {
    return this.resultatRepository
      .createQueryBuilder()
      .delete()
      .from(Resultat)
      .where('codeResultat = :id', { id })
      .execute()
  }
}
