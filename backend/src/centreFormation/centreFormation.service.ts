import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CentreFormation } from 'src/centreFormation/entities/centreFormation.entity';
import { Repository } from 'typeorm';
import { CentreFormationInterface } from '../centreFormation/interfaces/centreFormation.interface';
@Injectable()
export class CentreFormationService {
    constructor(
        @InjectRepository(CentreFormation)
        private centreFormationRepository: Repository<CentreFormationInterface>,
    ) { }
    create(centreFormation: CentreFormationInterface): Promise<CentreFormationInterface> {
        return this.centreFormationRepository.save(
            this.centreFormationRepository.create(centreFormation)
        );
    }
    findAll(): Promise<CentreFormationInterface[]> {
        return this.centreFormationRepository.find();
    }
    findById(id: number): Promise<CentreFormationInterface> {
        return this.centreFormationRepository.findOne(id);
    }
    update(id: string, data: any): Promise<any> {
        return this.centreFormationRepository
            .createQueryBuilder()
            .update()
            .set({
                nomCentreFormation: data.nomCentreFormation
            })
            .where('codeCentre = :id', { id })
            .execute()
    }
    delete(id: string): Promise<any> {
        return this.centreFormationRepository
            .createQueryBuilder()
            .delete()
            .from(CentreFormation)
            .where('codeCentre = :id', { id })
            .execute()
    }
}