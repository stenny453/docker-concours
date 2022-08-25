import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parametres } from 'src/parametres/entities/parametres.entity';
import { Repository } from 'typeorm';
import { ParametresInterface } from '../parametres/interfaces/parametres.interface';
@Injectable()
export class ParametresService {
    constructor(
        @InjectRepository(Parametres)
        private parametresRepository: Repository<ParametresInterface>,
    ) { }
    create(parametres: ParametresInterface): Promise<ParametresInterface> {
        return this.parametresRepository.save(
            this.parametresRepository.create(parametres)
        );
    }
    findAll(): Promise<ParametresInterface[]> {
        return this.parametresRepository.find();
    }
    findById(id: number): Promise<ParametresInterface> {
        return this.parametresRepository.findOne(id);
    }
    update(id: string, data: any): Promise<any> {
        return this.parametresRepository
            .createQueryBuilder()
            .update()
            .set({
                anneeUniv: data.anneeUniv,
                dateConcours: data.dateConcours,
                dateOuvertureInscription: data.dateOuvertureInscription,
                dateFermetureInscription: data.dateFermetureInscription
            })
            .where('id = :id', { id })
            .execute()
    }
    delete(id: string): Promise<any> {
        return this.parametresRepository
            .createQueryBuilder()
            .delete()
            .from(Parametres)
            .where('id = :id', { id })
            .execute()
    }
}