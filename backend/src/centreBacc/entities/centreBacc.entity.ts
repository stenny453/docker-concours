import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CentreBacc')
export class CentreBacc {
    @PrimaryGeneratedColumn()
    codeCentreBacc: number;

    @Column()
    nomCentreBacc: string;

    @Column()
    codeFaritany: number;
}