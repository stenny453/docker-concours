import { Request } from 'express';
import { FaritanyService } from 'src/faritany/faritany.service';
import { FaritanyInterface } from '../faritany/interfaces/faritany.interface';
export declare class FaritanyController {
    private faritanyService;
    constructor(faritanyService: FaritanyService);
    create(createFaritanyDto: FaritanyInterface): Promise<"error in creating faritany" | "faritany created successfully">;
    findAll(request: Request): Promise<FaritanyInterface[]>;
    findOne(id: number): Promise<FaritanyInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
