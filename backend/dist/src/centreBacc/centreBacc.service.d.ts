import { Repository } from 'typeorm';
import { CentreBaccInterface } from '../centreBacc/interfaces/centreBacc.interface';
export declare class CentreBaccService {
    private centreConcoursRepository;
    constructor(centreConcoursRepository: Repository<CentreBaccInterface>);
    create(centreConcours: CentreBaccInterface): Promise<CentreBaccInterface>;
    findAll(): Promise<CentreBaccInterface[]>;
    findById(id: number): Promise<CentreBaccInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
