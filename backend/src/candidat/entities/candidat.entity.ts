import { CentreBacc } from 'src/centreBacc/entities/centreBacc.entity';
import { CentreConcours } from 'src/centreConcours/entities/centreConcours.entity';
import { CentreFormation } from 'src/centreFormation/entities/centreFormation.entity';
import { Resultat } from 'src/resultat/entities/resultat.entity';
import { Serie } from 'src/serie/entities/serie.entity';
import { TypeCandidat } from 'src/typeCandidat/entities/typeCandidat.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('Candidat')
export class Candidat {
    @PrimaryGeneratedColumn()
    numInscription: number;

    @Column()
    nom: string;
    @Column({ default: null })
    prenoms: string;
    @Column({ default: null })
    dateNaiss: Date;
    @Column({ default: null })
    dateNaissExacte: Date;
    @Column()
    situationMatrimoniale: string;
    @Column()
    lieuNaissance: string;
    @Column()
    telephone: string;
    @Column({ default: null })
    nomPere: string;
    @Column()
    nomMere: string;
    @Column()
    adresseParent: string;
    @Column({ default: null })
    numCIN: string;
    @Column({ default: null })
    dateCIN: Date;
    @Column({ default: null })
    lieuCIN: string;
    @Column({ default: null })
    dateDuplicata: Date;
    @Column({ default: null })
    lieuDuplicata: string;
    @Column()
    photo: string;
    @Column()
    mel: string;
    @Column()
    numBord: string;
    @Column()
    dateBord: Date;
    @Column()
    agenceBord: string;
    @Column()
    montantBord: number;
    @Column()
    photoBord: string;
    @Column({ default: null })
    photoDiplome: string;
    @Column({ default: null })
    photoEtatCivil: string;
    @Column()
    ficheRenseignement: string;
    @Column()
    demandeInscription: string;
    @Column()
    numBacc: string;

    // Foreign keys
    @ManyToOne(
        () => CentreFormation,
        (centreFormation) => centreFormation.codeFormation,
        { nullable: true })
    premierChoix: CentreFormation;

    @ManyToOne(
        () => CentreFormation,
        (centreFormation) => centreFormation.codeFormation,
        { nullable: true })
    deuxiemeChoix: CentreFormation;

    @ManyToOne(
        () => CentreConcours,
        (centreConcours) => centreConcours.codeCentre,
        { nullable: true })
    codeCentre: CentreConcours;

    @ManyToOne(
        () => CentreBacc,
        (centreBacc) => centreBacc.codeCentreBacc,
        { nullable: true })
    codeCentreBacc: number;

    @ManyToOne(
        () => TypeCandidat,
        (typeCandidat) => typeCandidat.codeTypeCand,
        { nullable: true })
    codeTypeCand: TypeCandidat;

    @ManyToOne(() => Serie,
        (serie) => serie.codeSerie,
        { nullable: true })
    codeSerie: Serie;

    @ManyToOne(() => Resultat,
        (resultat) => resultat.codeResultat,
        { nullable: true })
    codeResultat: Resultat;
}