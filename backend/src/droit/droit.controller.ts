import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { DroitService } from 'src/droit/droit.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { DroitInterface } from '../droit/interfaces/droit.interface';


@Controller('droit')
export class DroitController {
    constructor(private droitService: DroitService) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createDroitDto: DroitInterface) {
        const droit = await this.droitService.create(createDroitDto);
        if (!droit) {
            return 'error in creating droit'
        }
        return 'droit created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const droit: Array<DroitInterface> = await this.droitService.findAll()
        return droit
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const droit = await this.droitService.findById(id);
        return droit;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newDroit: any = await this.droitService.update(id, body)
        return "droit updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.droitService.delete(id)
        return "droit deleted"
    }

    //endpoint relations 
    @Get('relation/:id')
    async droitWithParametreAndTypeCandidat(@Param('id') id: number) {
        const droit = await this.droitService.droitWithParametreAndTypeCandidat(id);
        return droit;
    }
}