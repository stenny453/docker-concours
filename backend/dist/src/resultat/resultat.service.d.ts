import { Repository } from 'typeorm';
import { ResultatInterface } from '../resultat/interfaces/resultat.interface';
export declare class ResultatService {
    private resultatRepository;
    constructor(resultatRepository: Repository<ResultatInterface>);
    create(resultat: ResultatInterface): Promise<ResultatInterface>;
    findAll(): Promise<ResultatInterface[]>;
    findById(id: number): Promise<ResultatInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
