import { Request } from 'express';
import { CentreBaccService } from 'src/centreBacc/centreBacc.service';
import { CentreBaccInterface } from '../centreBacc/interfaces/centreBacc.interface';
export declare class CentreBaccController {
    private centreBaccService;
    constructor(centreBaccService: CentreBaccService);
    create(createCentreBaccDto: CentreBaccInterface): Promise<"error in creating centreBacc" | "centreBacc created successfully">;
    findAll(request: Request): Promise<CentreBaccInterface[]>;
    findOne(id: number): Promise<CentreBaccInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
