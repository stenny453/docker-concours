import { Request } from 'express';
import { ParametresService } from 'src/parametres/parametres.service';
import { ParametresInterface } from '../parametres/interfaces/parametres.interface';
export declare class ParametresController {
    private parametresService;
    constructor(parametresService: ParametresService);
    create(createParametresDto: ParametresInterface): Promise<"error in creating parametres" | "parametres created successfully">;
    findAll(request: Request): Promise<ParametresInterface[]>;
    findOne(id: number): Promise<ParametresInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
