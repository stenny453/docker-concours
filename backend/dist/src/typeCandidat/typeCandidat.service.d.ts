import { Repository } from 'typeorm';
import { TypeCandidatInterface } from '../typeCandidat/interfaces/typeCandidat.interface';
export declare class TypeCandidatService {
    private typeCandidatRepository;
    constructor(typeCandidatRepository: Repository<TypeCandidatInterface>);
    create(typeCandidat: TypeCandidatInterface): Promise<TypeCandidatInterface>;
    findAll(): Promise<TypeCandidatInterface[]>;
    findById(id: number): Promise<TypeCandidatInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
