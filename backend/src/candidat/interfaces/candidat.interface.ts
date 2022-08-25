export interface CandidatInterface {
    libelleSerie: string;
    nom: string;
    prenoms: string;
    dateNaiss: Date;
    dateNaissExacte: Date;
    situationMatrimoniale: string;
    lieuNaissance: string;
    telephone: string;
    nomPere: string;
    nomMere: string;
    adresseParent: string;
    numCIN: string;
    dateCIN: Date;
    lieuCIN: string;
    dateDuplicata: Date;
    lieuDuplicata: string;
    photo: string;
    mel: string;
    numBord: string;
    dateBord: Date;
    agenceBord: string;
    montantBord: number;
    photoBord: string;
    photoDiplome: string;
    photoEtatCivil: string;
    premierChoix: number;
    deuxiemeChoix: number;
    numBacc: string;
    ficheRenseignement: string;
    demandeInscription: string;
}