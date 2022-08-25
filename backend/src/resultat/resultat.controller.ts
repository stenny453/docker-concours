import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { ResultatService } from 'src/resultat/resultat.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { ResultatInterface } from '../resultat/interfaces/resultat.interface';


@Controller('resultat')
export class ResultatController {
    constructor(private resultatService: ResultatService) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createResultatDto: ResultatInterface) {
        const resultat = await this.resultatService.create(createResultatDto);
        if (!resultat) {
            return 'error in creating resultat'
        }
        return 'resultat created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const resultats: Array<ResultatInterface> = await this.resultatService.findAll()
        return resultats
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const resultat = await this.resultatService.findById(id);
        return resultat;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newResultat: any = await this.resultatService.update(id, body)
        return "resultat updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.resultatService.delete(id)
        return "resultat deleted"
    }
}
