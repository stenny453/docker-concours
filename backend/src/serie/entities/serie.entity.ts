import { Choix } from 'src/choix/entities/choix.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('Serie')
export class Serie {
    @PrimaryGeneratedColumn()
    codeSerie: number;

    @Column()
    libelleSerie: string;

    // relation bi-directional
    @ManyToMany(() => Choix, (choix) => choix.series)
    choix: Choix[]
}