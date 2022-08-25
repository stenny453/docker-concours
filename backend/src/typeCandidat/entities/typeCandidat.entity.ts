import { Droit } from 'src/droit/entities/droit.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('TypeCandidat')
export class TypeCandidat {
    @PrimaryGeneratedColumn()
    codeTypeCand: number;

    @Column()
    libelleTypeCand: string;

    // relation 
    @OneToMany(() => Droit, droit => droit.parametres)
    public params!: Droit[];
}