import { Choix } from 'src/choix/entities/choix.entity';
import { Droit } from 'src/droit/entities/droit.entity';
export declare class Parametres {
    id: number;
    anneeUniv: string;
    dateConcours: Date;
    dateOuvertureInscription: Date;
    dateFermetureInscription: Date;
    numCpteENI: string;
    params: Droit[];
    choix: Choix[];
}
