/// <reference types="multer" />
import { Request } from 'express';
import { CandidatService } from 'src/candidat/candidat.service';
import { CandidatInterface } from '../candidat/interfaces/candidat.interface';
export declare class CandidatController {
    private candidatService;
    constructor(candidatService: CandidatService);
    create(createCandidatDto: CandidatInterface, files: Array<Express.Multer.File>): Promise<void>;
    findAll(request: Request): Promise<CandidatInterface[]>;
    findOne(id: number): Promise<CandidatInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
    getCandidat(id: number): Promise<CandidatInterface>;
}
