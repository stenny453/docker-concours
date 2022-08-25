import { Repository } from 'typeorm';
import { DroitInterface } from '../droit/interfaces/droit.interface';
export declare class DroitService {
    private droitRepository;
    constructor(droitRepository: Repository<DroitInterface>);
    create(droit: DroitInterface): Promise<DroitInterface>;
    findAll(): Promise<DroitInterface[]>;
    findById(id: number): Promise<DroitInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
    droitWithParametreAndTypeCandidat(id: number): Promise<DroitInterface>;
}
