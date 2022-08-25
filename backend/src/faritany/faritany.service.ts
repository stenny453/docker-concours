import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faritany } from 'src/faritany/entities/faritany.entity';
import { Repository } from 'typeorm';
import { FaritanyInterface } from '../faritany/interfaces/faritany.interface';
@Injectable()
export class FaritanyService {
    constructor(
        @InjectRepository(Faritany)
        private faritanyRepository: Repository<FaritanyInterface>,
    ) { }
    create(faritany: FaritanyInterface): Promise<FaritanyInterface> {
        return this.faritanyRepository.save(
            this.faritanyRepository.create(faritany)
        );
    }
    findAll(): Promise<FaritanyInterface[]> {
        return this.faritanyRepository.find();
    }
    findById(id: number): Promise<FaritanyInterface> {
        return this.faritanyRepository.findOne(id);
    }
    update(id: string, data: any): Promise<any> {
        return this.faritanyRepository
            .createQueryBuilder()
            .update()
            .set({
                nomFaritany: data.nomFaritany
            })
            .where('codeFaritany = :id', { id })
            .execute()
    }
    delete(id: string): Promise<any> {
        return this.faritanyRepository
            .createQueryBuilder()
            .delete()
            .from(Faritany)
            .where('codeFaritany = :id', { id })
            .execute()
    }
}