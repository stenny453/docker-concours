import { Repository } from 'typeorm';
import { EpreuveInterface } from '../epreuve/interfaces/epreuve.interface';
export declare class EpreuveSerivce {
    private epreuveRepository;
    constructor(epreuveRepository: Repository<EpreuveInterface>);
    create(epreuve: EpreuveInterface): Promise<EpreuveInterface>;
    findAll(): Promise<EpreuveInterface[]>;
    findById(id: number): Promise<EpreuveInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
