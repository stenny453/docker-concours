import { Choix } from 'src/choix/entities/choix.entity';
export declare class Epreuve {
    codeEpreuve: number;
    libelleEpreuve: string;
    coef: number;
    duree: number;
    dateEpreuve: Date;
    choix: Choix[];
}
