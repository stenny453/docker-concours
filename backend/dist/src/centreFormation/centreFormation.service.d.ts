import { Repository } from 'typeorm';
import { CentreFormationInterface } from '../centreFormation/interfaces/centreFormation.interface';
export declare class CentreFormationService {
    private centreFormationRepository;
    constructor(centreFormationRepository: Repository<CentreFormationInterface>);
    create(centreFormation: CentreFormationInterface): Promise<CentreFormationInterface>;
    findAll(): Promise<CentreFormationInterface[]>;
    findById(id: number): Promise<CentreFormationInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
