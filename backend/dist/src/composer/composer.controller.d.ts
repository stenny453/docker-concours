import { Request } from 'express';
import { ComposerService } from 'src/composer/composer.service';
import { ComposerInterface } from '../composer/interfaces/composer.interface';
export declare class ComposerController {
    private composerService;
    constructor(composerService: ComposerService);
    create(createComposerDto: ComposerInterface): Promise<"error in creating composer" | "composer created successfully">;
    findAll(request: Request): Promise<ComposerInterface[]>;
    findOne(id: number): Promise<ComposerInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
    getComposer(id: number): Promise<ComposerInterface>;
    getCandidatNotes(id: number): Promise<ComposerInterface[]>;
}
