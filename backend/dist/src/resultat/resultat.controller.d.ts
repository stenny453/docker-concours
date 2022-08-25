import { Request } from 'express';
import { ResultatService } from 'src/resultat/resultat.service';
import { ResultatInterface } from '../resultat/interfaces/resultat.interface';
export declare class ResultatController {
    private resultatService;
    constructor(resultatService: ResultatService);
    create(createResultatDto: ResultatInterface): Promise<"error in creating resultat" | "resultat created successfully">;
    findAll(request: Request): Promise<ResultatInterface[]>;
    findOne(id: number): Promise<ResultatInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
