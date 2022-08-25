import { Epreuve } from 'src/epreuve/entities/epreuve.entity';
import { Parametres } from 'src/parametres/entities/parametres.entity';
import { Serie } from 'src/serie/entities/serie.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, AfterInsert, EntitySubscriberInterface, InsertEvent, BeforeInsert, Repository, BeforeRemove, BeforeUpdate } from 'typeorm';

@Entity('Choix')
export class Choix {
    @PrimaryGeneratedColumn()
    codeChoix: number;

    @Column()
    libelleChoix: string;
    @Column()
    limiteAge: number;
    @Column()
    limiteBacc: number;
    @Column()
    nbPlaces: number;
    @Column()
    nbListeAttente: number;

    // relation bi-directional avec serie
    @ManyToMany(() => Serie, (serie) => serie.choix)
    @JoinTable()
    series: Serie[]

    // relation bi-directional avec epreuve
    @ManyToMany(() => Epreuve, (epreuve) => epreuve.choix)
    @JoinTable()
    epreuves: Epreuve[]

    // relation bi-directional avec parametres
    @ManyToMany(() => Parametres, (parametres) => parametres.choix)
    @JoinTable()
    parametres: Parametres[]
}