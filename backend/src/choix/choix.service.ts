import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Choix } from 'src/choix/entities/choix.entity';
import { Repository } from 'typeorm';
import { ChoixInterface } from '../choix/interfaces/choix.interface';
@Injectable()
export class ChoixService {
    constructor(
        @InjectRepository(Choix)
        private choixRepository: Repository<ChoixInterface>,
    ) { }
    create(choix: ChoixInterface): Promise<ChoixInterface> {
        return this.choixRepository.save(
            this.choixRepository.create(choix)
        );
    }
    findAll(): Promise<ChoixInterface[]> {
        return this.choixRepository.find();
    }
    findById(id: number): Promise<ChoixInterface> {
        return this.choixRepository.findOne(id);
    }
    update(id: string, data: any): Promise<any> {
        return this.choixRepository
            .createQueryBuilder()
            .update()
            .set({
                libelleChoix: data.libelleChoix,
                limiteAge: data.limiteAge,
                limiteBacc: data.limiteBacc,
                nbPlaces: data.nbPlaces,
                nbListeAttente: data.nbListeAttente,
            })
            .where('codeChoix = :id', { id })
            .execute()
    }
    delete(id: string): Promise<any> {
        return this.choixRepository
            .createQueryBuilder()
            .delete()
            .from(Choix)
            .where('codeChoix = :id', { id })
            .execute()
    }
}