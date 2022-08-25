import { Choix } from 'src/choix/entities/choix.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity('Epreuve')
export class Epreuve {
    @PrimaryGeneratedColumn()
    codeEpreuve: number;

    @Column()
    libelleEpreuve: string;
    @Column()
    coef: number;
    @Column()
    duree: number;
    @Column()
    dateEpreuve: Date;

    // relation bi-directional avec choix
    @ManyToMany(() => Choix, (choix) => choix.epreuves)
    choix: Choix[]
}