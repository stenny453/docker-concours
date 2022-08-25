import { Request } from 'express';
import { SerieService } from 'src/serie/serie.service';
import { SerieInterface } from '../serie/interfaces/serie.interface';
export declare class SerieController {
    private serieService;
    constructor(serieService: SerieService);
    create(createSerieDto: SerieInterface): Promise<"error in creating serie" | "serie created successfully">;
    findAll(request: Request): Promise<SerieInterface[]>;
    findOne(id: number): Promise<SerieInterface>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
    getSerie(id: number): Promise<SerieInterface[]>;
}
