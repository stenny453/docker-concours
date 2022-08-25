import { Request } from 'express';
import { TypeCandidatService } from 'src/typeCandidat/typeCandidat.service';
import { TypeCandidatInterface } from '../typeCandidat/interfaces/typeCandidat.interface';
export declare class TypeCandidatController {
    private typeCandidatService;
    constructor(typeCandidatService: TypeCandidatService);
    create(createTypeCandidatDto: TypeCandidatInterface): Promise<"error in creating type candidat" | "type candidat created successfully">;
    findAll(request: Request): Promise<TypeCandidatInterface[]>;
    findOne(id: number): Promise<TypeCandidatInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
