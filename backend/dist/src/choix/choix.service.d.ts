import { Repository } from 'typeorm';
import { ChoixInterface } from '../choix/interfaces/choix.interface';
export declare class ChoixService {
    private choixRepository;
    constructor(choixRepository: Repository<ChoixInterface>);
    create(choix: ChoixInterface): Promise<ChoixInterface>;
    findAll(): Promise<ChoixInterface[]>;
    findById(id: number): Promise<ChoixInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
