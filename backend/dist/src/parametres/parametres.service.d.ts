import { Repository } from 'typeorm';
import { ParametresInterface } from '../parametres/interfaces/parametres.interface';
export declare class ParametresService {
    private parametresRepository;
    constructor(parametresRepository: Repository<ParametresInterface>);
    create(parametres: ParametresInterface): Promise<ParametresInterface>;
    findAll(): Promise<ParametresInterface[]>;
    findById(id: number): Promise<ParametresInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
