import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Resultat')
export class Resultat {
    @PrimaryGeneratedColumn()
    codeResultat: number;

    @Column()
    libelleResultat: string;
}