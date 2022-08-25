import { Parametres } from 'src/parametres/entities/parametres.entity';
import { TypeCandidat } from 'src/typeCandidat/entities/typeCandidat.entity';
export declare class Droit {
    id: number;
    droitConcours: number;
    fraisScolaire: number;
    parametres: Parametres;
    typeCandidat: TypeCandidat;
}
