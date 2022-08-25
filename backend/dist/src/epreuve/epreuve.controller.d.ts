import { Request } from 'express';
import { EpreuveSerivce } from 'src/epreuve/epreuve.service';
import { EpreuveInterface } from '../epreuve/interfaces/epreuve.interface';
export declare class EpreuveController {
    private epreuveService;
    constructor(epreuveService: EpreuveSerivce);
    create(createEpreuveDto: EpreuveInterface): Promise<"error in creating epreuve" | "epreuve created successfully">;
    findAll(request: Request): Promise<EpreuveInterface[]>;
    findOne(id: number): Promise<EpreuveInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
