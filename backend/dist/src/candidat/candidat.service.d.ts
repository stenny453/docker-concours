import { Repository } from 'typeorm';
import { CandidatInterface } from '../candidat/interfaces/candidat.interface';
export declare class CandidatService {
    private candidatRepository;
    constructor(candidatRepository: Repository<CandidatInterface>);
    create(candidat: CandidatInterface): Promise<CandidatInterface>;
    findAll(): Promise<CandidatInterface[]>;
    findById(id: number): Promise<CandidatInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
    candidat(id: number): Promise<CandidatInterface>;
}
