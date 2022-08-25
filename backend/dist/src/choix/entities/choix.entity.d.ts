import { Epreuve } from 'src/epreuve/entities/epreuve.entity';
import { Parametres } from 'src/parametres/entities/parametres.entity';
import { Serie } from 'src/serie/entities/serie.entity';
export declare class Choix {
    codeChoix: number;
    libelleChoix: string;
    limiteAge: number;
    limiteBacc: number;
    nbPlaces: number;
    nbListeAttente: number;
    series: Serie[];
    epreuves: Epreuve[];
    parametres: Parametres[];
}
