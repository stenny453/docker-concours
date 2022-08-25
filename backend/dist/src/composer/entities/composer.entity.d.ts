import { Candidat } from 'src/candidat/entities/candidat.entity';
import { Epreuve } from 'src/epreuve/entities/epreuve.entity';
export declare class Composer {
    id: number;
    Presence: boolean;
    Note: number;
    numInscription: Candidat;
    codeEpreuve: Epreuve;
}
