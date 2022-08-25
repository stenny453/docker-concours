import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CentreConcours } from 'src/centreConcours/entities/centreConcours.entity';
import { Repository } from 'typeorm';
import { CentreConcoursInterface } from '../centreConcours/interfaces/centreConcours.interface';
@Injectable()
export class CentreConcoursService {
    constructor(
        @InjectRepository(CentreConcours)
        private centreConcoursRepository: Repository<CentreConcoursInterface>,
    ) { }
    create(centreConcours: CentreConcoursInterface): Promise<CentreConcoursInterface> {
        return this.centreConcoursRepository.save(
            this.centreConcoursRepository.create(centreConcours)
        );
    }
    findAll(): Promise<CentreConcoursInterface[]> {
        return this.centreConcoursRepository.find();
    }
    findById(id: number): Promise<CentreConcoursInterface> {
        return this.centreConcoursRepository.findOne(id);
    }
    update(id: string, data: any): Promise<any> {
        return this.centreConcoursRepository
            .createQueryBuilder()
            .update()
            .set({
                nomCentre: data.nomCentre
            })
            .where('codeCentre = :id', { id })
            .execute()
    }
    delete(id: string): Promise<any> {
        return this.centreConcoursRepository
            .createQueryBuilder()
            .delete()
            .from(CentreConcours)
            .where('codeCentre = :id', { id })
            .execute()
    }
}