import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { ParametresService } from 'src/parametres/parametres.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { ParametresInterface } from '../parametres/interfaces/parametres.interface';


@Controller('parametres')
export class ParametresController {
    constructor(private parametresService: ParametresService) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createParametresDto: ParametresInterface) {
        const choix = await this.parametresService.create(createParametresDto);
        if (!choix) {
            return 'error in creating parametres'
        }
        return 'parametres created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const parametres: Array<ParametresInterface> = await this.parametresService.findAll()
        return parametres
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const choix = await this.parametresService.findById(id);
        return choix;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newChoix: any = await this.parametresService.update(id, body)
        return "parametres updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.parametresService.delete(id)
        return "parametres deleted"
    }
}