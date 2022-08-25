import { Repository } from 'typeorm';
import { FaritanyInterface } from '../faritany/interfaces/faritany.interface';
export declare class FaritanyService {
    private faritanyRepository;
    constructor(faritanyRepository: Repository<FaritanyInterface>);
    create(faritany: FaritanyInterface): Promise<FaritanyInterface>;
    findAll(): Promise<FaritanyInterface[]>;
    findById(id: number): Promise<FaritanyInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
