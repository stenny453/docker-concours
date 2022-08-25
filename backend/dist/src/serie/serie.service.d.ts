import { Repository } from 'typeorm';
import { SerieInterface } from '../serie/interfaces/serie.interface';
export declare class SerieService {
    private serieRepository;
    constructor(serieRepository: Repository<SerieInterface>);
    create(serie: SerieInterface): Promise<SerieInterface>;
    findAll(): Promise<SerieInterface[]>;
    findById(id: number): Promise<SerieInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
    serie(id: number): Promise<SerieInterface[]>;
}
