import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Composer } from 'src/composer/entities/composer.entity';
import { Repository } from 'typeorm';
import { ComposerInterface } from '../composer/interfaces/composer.interface';
@Injectable()
export class ComposerService {
  constructor(
    @InjectRepository(Composer)
    private composerRepository: Repository<ComposerInterface>,
  ) { }
  create(composer: ComposerInterface): Promise<ComposerInterface> {
    return this.composerRepository.save(
      this.composerRepository.create(composer)
    );
  }
  findAll(): Promise<ComposerInterface[]> {
    return this.composerRepository.find();
  }
  findById(id: number): Promise<ComposerInterface> {
    return this.composerRepository.findOne(id);
  }
  update(id: string, data: any): Promise<any> {
    return this.composerRepository
      .createQueryBuilder()
      .update()
      .set({
        Presence: data.Presence,
        Note: data.Note
      })
      .where('id = :id', { id })
      .execute()
  }
  delete(id: string): Promise<any> {
    return this.composerRepository
      .createQueryBuilder()
      .delete()
      .from(Composer)
      .where('id = :id', { id })
      .execute()
  }
  composer(id: number): Promise<ComposerInterface> {
    return this.composerRepository
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.numInscription', 'candidat')
      .leftJoinAndSelect('c.codeEpreuve', 'epreuve')
      .where("c.id = :pid", { pid: id })
      .getOne();
  }
  // on passe l'id du candidat
  candidatNotes(id: number): Promise<ComposerInterface[]> {
    return this.composerRepository
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.numInscription', 'candidat')
      .leftJoinAndSelect('c.codeEpreuve', 'epreuve')
      .where("c.numInscriptionnumInscription = :cid", { cid: id })
      .getMany();
  }
}
