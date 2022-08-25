import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidat } from 'src/candidat/entities/candidat.entity';
import { Composer } from 'src/composer/entities/composer.entity';
import { Repository } from 'typeorm';
import { CandidatInterface } from '../candidat/interfaces/candidat.interface';
import { ComposerInterface } from '../composer/interfaces/composer.interface'
@Injectable()
export class CandidatService {
  constructor(
    @InjectRepository(Candidat)
    private candidatRepository: Repository<CandidatInterface>,
  ) { }
  create(candidat: CandidatInterface): Promise<CandidatInterface> {
    return this.candidatRepository.save(
      this.candidatRepository.create(candidat)
    );
  }
  findAll(): Promise<CandidatInterface[]> {
    return this.candidatRepository.find();
  }
  findById(id: number): Promise<CandidatInterface> {
    return this.candidatRepository.findOne(id);
  }
  update(id: string, data: any): Promise<any> {
    return this.candidatRepository
      .createQueryBuilder()
      .update()
      .set({
        nom: data.nom,
        prenoms: data.prenoms,
        dateNaiss: data.dateNaiss,
        dateNaissExacte: data.dateNaissExacte,
        situationMatrimoniale: data.situationMatrimoniale,
        lieuNaissance: data.lieuNaissance,
        telephone: data.telephone,
        nomPere: data.nomPere,
        nomMere: data.nomMere,
        adresseParent: data.adresseParent,
        numCIN: data.numCIN,
        dateCIN: data.dateCIN,
        lieuCIN: data.lieuCIN,
        dateDuplicata: data.dateDuplicata,
        lieuDuplicata: data.lieuDuplicata,
        photo: data.photo,
        mel: data.mel,
        numBord: data.numBord,
        dateBord: data.dateBord,
        agenceBord: data.agenceBord,
        montantBord: data.montantBord,
        photoBord: data.photoBord,
        photoDiplome: data.photoDiplome,
        photoEtatCivil: data.photoEtatCivil,
        premierChoix: data.premierChoix,
        deuxiemeChoix: data.deuxiemeChoix,
        numBacc: data.numBacc
      })
      .where('numInscription = :id', { id })
      .execute()
  }
  delete(id: string): Promise<any> {
    return this.candidatRepository
      .createQueryBuilder()
      .delete()
      .from(Candidat)
      .where('numInscription = :id', { id })
      .execute()
  }
  candidat(id: number): Promise<CandidatInterface> {
    return this.candidatRepository
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.codeCentre', 'centreconcours')
      .leftJoinAndSelect('c.codeCentreBacc', 'centrebacc')
      .leftJoinAndSelect('c.codeTypeCand', 'typecandidat')
      .leftJoinAndSelect('c.codeSerie', 'serie')
      .leftJoinAndSelect('c.codeResultat', 'resultat')
      .where("c.numInscription = :cid", { cid: id })
      .getOne();
  }


  // insetion entre les relations
  // await connection
  // .getRepository(RoleEntity)
  // .createQueryBuilder()
  // .insert()
  // .values({ user, establishment, level })
  // .execute()
}
