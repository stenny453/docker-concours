import { Request } from 'express';
import { CentreConcoursService } from 'src/centreConcours/centreConcours.service';
import { CentreConcoursInterface } from '../centreConcours/interfaces/centreConcours.interface';
export declare class CentreConcoursController {
    private centreConcoursService;
    constructor(centreConcoursService: CentreConcoursService);
    create(createCentreConcoursDto: CentreConcoursInterface): Promise<"error in creating centreConcours" | "centreConcours created successfully">;
    findAll(request: Request): Promise<CentreConcoursInterface[]>;
    findOne(id: number): Promise<CentreConcoursInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
