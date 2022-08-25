import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Droit } from 'src/droit/entities/droit.entity';
import { Repository } from 'typeorm';
import { DroitInterface } from '../droit/interfaces/droit.interface';
@Injectable()
export class DroitService {
    constructor(
        @InjectRepository(Droit)
        private droitRepository: Repository<DroitInterface>,
    ) { }
    create(droit: DroitInterface): Promise<DroitInterface> {
        return this.droitRepository.save(
            this.droitRepository.create(droit)
        );
    }
    findAll(): Promise<DroitInterface[]> {
        return this.droitRepository.find();
    }
    findById(id: number): Promise<DroitInterface> {
        return this.droitRepository.findOne(id);
    }
    update(id: string, data: any): Promise<any> {
        return this.droitRepository
            .createQueryBuilder()
            .update()
            .set({
                droitConcours: data.droitConcours,
                fraisScolaire: data.fraisScolaire,
            })
            .where('id = :id', { id })
            .execute()
    }
    delete(id: string): Promise<any> {
        return this.droitRepository
            .createQueryBuilder()
            .delete()
            .from(Droit)
            .where('id = :id', { id })
            .execute()
    }
    droitWithParametreAndTypeCandidat(id: number): Promise<DroitInterface> {
        return this.droitRepository
            .createQueryBuilder('d')
            .leftJoinAndSelect('d.parametres', 'parametres')
            .leftJoinAndSelect('d.typeCandidat', 'typeCandidat')
            .where("d.id = :pid", { pid: id })
            .getOne();
    }
}