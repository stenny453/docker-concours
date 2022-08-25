import { Choix } from 'src/choix/entities/choix.entity';
import { Droit } from 'src/droit/entities/droit.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity('Parametres')
export class Parametres {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    anneeUniv: string;
    @Column({ default: null })
    dateConcours: Date;
    @Column()
    dateOuvertureInscription: Date;
    @Column()
    dateFermetureInscription: Date;
    @Column()
    numCpteENI: string;

    // relation 
    @OneToMany(() => Droit, droit => droit.parametres)
    public params!: Droit[];

    // relation bi-directional avec choix
    @ManyToMany(() => Choix, (choix) => choix.parametres)
    choix: Choix[]
}