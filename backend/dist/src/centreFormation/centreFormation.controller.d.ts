import { Request } from 'express';
import { CentreFormationService } from 'src/centreFormation/centreFormation.service';
import { CentreFormationInterface } from '../centreFormation/interfaces/centreFormation.interface';
export declare class CentreFormationController {
    private centreFormationService;
    constructor(centreFormationService: CentreFormationService);
    create(createCentreFormationDto: CentreFormationInterface): Promise<"error in creating centreFormation" | "centreFormation created successfully">;
    findAll(request: Request): Promise<CentreFormationInterface[]>;
    findOne(id: number): Promise<CentreFormationInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
