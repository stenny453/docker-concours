import { Repository } from 'typeorm';
import { CentreConcoursInterface } from '../centreConcours/interfaces/centreConcours.interface';
export declare class CentreConcoursService {
    private centreConcoursRepository;
    constructor(centreConcoursRepository: Repository<CentreConcoursInterface>);
    create(centreConcours: CentreConcoursInterface): Promise<CentreConcoursInterface>;
    findAll(): Promise<CentreConcoursInterface[]>;
    findById(id: number): Promise<CentreConcoursInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
