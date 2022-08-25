import { Request } from 'express';
import { ChoixService } from 'src/choix/choix.service';
import { ChoixInterface } from '../choix/interfaces/choix.interface';
export declare class ChoixController {
    private choixService;
    constructor(choixService: ChoixService);
    create(createChoixDto: ChoixInterface): Promise<"error in creating choix" | "choix created successfully">;
    findAll(request: Request): Promise<ChoixInterface[]>;
    findOne(id: number): Promise<ChoixInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
