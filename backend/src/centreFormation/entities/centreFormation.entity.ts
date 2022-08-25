import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CentreFormation')
export class CentreFormation {
    @PrimaryGeneratedColumn()
    codeFormation: number;

    @Column()
    nomCentreFormation: string;
}