import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CentreConcours')
export class CentreConcours {
    @PrimaryGeneratedColumn()
    codeCentre: number;

    @Column()
    nomCentre: string;
}