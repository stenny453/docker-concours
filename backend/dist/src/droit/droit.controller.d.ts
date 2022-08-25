import { Request } from 'express';
import { DroitService } from 'src/droit/droit.service';
import { DroitInterface } from '../droit/interfaces/droit.interface';
export declare class DroitController {
    private droitService;
    constructor(droitService: DroitService);
    create(createDroitDto: DroitInterface): Promise<"error in creating droit" | "droit created successfully">;
    findAll(request: Request): Promise<DroitInterface[]>;
    findOne(id: number): Promise<DroitInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
    droitWithParametreAndTypeCandidat(id: number): Promise<DroitInterface>;
}
