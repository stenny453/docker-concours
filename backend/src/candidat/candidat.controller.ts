import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards, UseInterceptors, UploadedFiles, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { CandidatService } from 'src/candidat/candidat.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { CandidatInterface } from '../candidat/interfaces/candidat.interface';
import {
    AnyFilesInterceptor,
    FileFieldsInterceptor, FileInterceptor, FilesInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { resolve } from 'path';
@Controller('candidat')
export class CandidatController {
    constructor(private candidatService: CandidatService) { }
    @Post('create')
    @UseInterceptors(
        AnyFilesInterceptor({
            storage: diskStorage({
                destination: (req, file, cb) => cb(null, resolve('.', 'public', 'upload')),
                filename: (req, files, cb) => cb(null, files.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + files.mimetype.split('/')[1])
            }),
        })
    )
    async create(@Body() createCandidatDto: CandidatInterface, @UploadedFiles() files: Array<Express.Multer.File>) {
        // définition des mimetypes utiles
        let mimetypes = "jpeg png pdf";
        // pour chaque fichier envoyé, correspondance entre fieldname et  attribut dans la DB, et vérification du type de fichier
        files.forEach(f => {
            if (f.fieldname == 'photo') {
                createCandidatDto.photo = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
                }
            } else if (f.fieldname == 'photoBord') {
                createCandidatDto.photoBord = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
                }
            } else if (f.fieldname == 'photoDiplome') {
                createCandidatDto.photoDiplome = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
                }
            } else if (f.fieldname == 'photoEtatCivil') {
                createCandidatDto.photoEtatCivil = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
                }
            } else if (f.fieldname == 'ficheRenseignement') {
                createCandidatDto.ficheRenseignement = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
                }
            } else if (f.fieldname == 'demandeInscription') {
                createCandidatDto.demandeInscription = f.originalname.split('.')[0] + '_' + Math.random().toString(36).substr(2, 9) + '.' + f.mimetype.split('/')[1];
                if (!mimetypes.includes(f.mimetype.split('/')[1])) {
                    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
                }
            }
        })
        // vérifier dateNaiss et dateNaissExact
        if (createCandidatDto.dateNaissExacte == null) {
            createCandidatDto.dateNaissExacte = null;
        } else if (createCandidatDto.dateNaiss == null) {
            createCandidatDto.dateNaiss = null;
        }
        // on verifie si ces 5 champs sont bien rensignés / sinon code 400
        if (createCandidatDto.photo && createCandidatDto.photoBord && createCandidatDto.ficheRenseignement && createCandidatDto.photoEtatCivil && createCandidatDto.demandeInscription) {
            const candidat = await this.candidatService.create(createCandidatDto);
            if (!candidat) {
                throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
            }
            throw new HttpException('candidat created successfully', HttpStatus.CREATED)
        } else {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
        }
    }

    @Get()
    async findAll(@Req() request: Request) {
        const candidats: Array<CandidatInterface> = await this.candidatService.findAll()
        return candidats
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        const candidat = await this.candidatService.findById(id);
        return candidat;
    }

    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newCandidat: any = await this.candidatService.update(id, body)
        return "candidat updated";
    }

    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.candidatService.delete(id)
        return "candidat deleted"
    }

    @Get('relation/:id')
    async getCandidat(@Param('id') id: number) {
        const candidat = await this.candidatService.candidat(id)
        return candidat
    }

}
