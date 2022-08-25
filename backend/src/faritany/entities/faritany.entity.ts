import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Faritany')
export class Faritany {
    @PrimaryGeneratedColumn()
    codeFaritany: number;

    @Column()
    nomFaritany: string;
}