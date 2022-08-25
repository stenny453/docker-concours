import { Repository } from 'typeorm';
import { ComposerInterface } from '../composer/interfaces/composer.interface';
export declare class ComposerService {
    private composerRepository;
    constructor(composerRepository: Repository<ComposerInterface>);
    create(composer: ComposerInterface): Promise<ComposerInterface>;
    findAll(): Promise<ComposerInterface[]>;
    findById(id: number): Promise<ComposerInterface>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
    composer(id: number): Promise<ComposerInterface>;
    candidatNotes(id: number): Promise<ComposerInterface[]>;
}
