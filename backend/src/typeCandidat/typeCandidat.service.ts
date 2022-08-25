import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeCandidat } from 'src/typeCandidat/entities/typeCandidat.entity';
import { Repository } from 'typeorm';
import { TypeCandidatInterface } from '../typeCandidat/interfaces/typeCandidat.interface';
@Injectable()
export class TypeCandidatService {
    constructor(
        @InjectRepository(TypeCandidat)
        private typeCandidatRepository: Repository<TypeCandidatInterface>,
    ) { }
    create(typeCandidat: TypeCandidatInterface): Promise<TypeCandidatInterface> {
        return this.typeCandidatRepository.save(
            this.typeCandidatRepository.create(typeCandidat)
        );
    }
    findAll(): Promise<TypeCandidatInterface[]> {
        return this.typeCandidatRepository.find();
    }
    findById(id: number): Promise<TypeCandidatInterface> {
        return this.typeCandidatRepository.findOne(id);
    }
    update(id: string, data: any): Promise<any> {
        return this.typeCandidatRepository
            .createQueryBuilder()
            .update()
            .set({
                libelleTypeCand: data.libelleTypeCand
            })
            .where('CodeTypeCand = :id', { id })
            .execute()
    }
    // à débogger, avec QueryBuilder on a un problème de fonction non trouvable
    delete(id: string): Promise<any> {
        // return this.typeCandidatRepository
        //     .createQueryBuilder()
        //     .delete()
        //     .from(TypeCandidat)
        //     .where('CodeTypeCand = :id', { id })
        //     .execute()

        // pour ne tarder, on utilise d'abord du Query et du SQL 
        return this.typeCandidatRepository.query(`DELETE FROM TypeCandidat WHERE CodeTypeCand = ${id}`)
    }
}