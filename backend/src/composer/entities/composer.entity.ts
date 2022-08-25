import { Candidat } from 'src/candidat/entities/candidat.entity';
import { Epreuve } from 'src/epreuve/entities/epreuve.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('Composer')
export class Composer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Presence: boolean;
    @Column()
    Note: number;

    // relationship 
    @ManyToOne(() => Candidat, (candidat) => candidat.numInscription)
    numInscription!: Candidat

    @ManyToOne(() => Epreuve, (epreuve) => epreuve.codeEpreuve)
    codeEpreuve!: Epreuve
}