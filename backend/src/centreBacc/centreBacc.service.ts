import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CentreBacc } from 'src/centreBacc/entities/centreBacc.entity';
import { Repository } from 'typeorm';
import { CentreBaccInterface } from '../centreBacc/interfaces/centreBacc.interface';
@Injectable()
export class CentreBaccService {
    constructor(
        @InjectRepository(CentreBacc)
        private centreConcoursRepository: Repository<CentreBaccInterface>,
    ) { }
    create(centreConcours: CentreBaccInterface): Promise<CentreBaccInterface> {
        return this.centreConcoursRepository.save(
            this.centreConcoursRepository.create(centreConcours)
        );
    }
    findAll(): Promise<CentreBaccInterface[]> {
        return this.centreConcoursRepository.find();
    }
    findById(id: number): Promise<CentreBaccInterface> {
        return this.centreConcoursRepository.findOne(id);
    }
    update(id: string, data: any): Promise<any> {
        return this.centreConcoursRepository
            .createQueryBuilder()
            .update()
            .set({
                nomCentreBacc: data.nomCentreBacc,
                codeFaritany: data.codeFaritany
            })
            .where('codeCentreBacc = :id', { id })
            .execute()
    }
    delete(id: string): Promise<any> {
        return this.centreConcoursRepository
            .createQueryBuilder()
            .delete()
            .from(CentreBacc)
            .where('codeCentreBacc = :id', { id })
            .execute()
    }
}