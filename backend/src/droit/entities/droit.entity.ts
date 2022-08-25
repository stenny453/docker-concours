import { Parametres } from 'src/parametres/entities/parametres.entity';
import { TypeCandidat } from 'src/typeCandidat/entities/typeCandidat.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity('Droit')
export class Droit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    droitConcours: number;
    @Column()
    fraisScolaire: number;

    // relation personnalisée 
    @ManyToOne(() => Parametres, (parametres) => parametres.id)
    parametres!: Parametres

    @ManyToOne(() => TypeCandidat, (typeCandidat) => typeCandidat.codeTypeCand)
    typeCandidat!: TypeCandidat
}