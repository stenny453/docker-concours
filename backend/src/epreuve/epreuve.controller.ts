import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { EpreuveSerivce } from 'src/epreuve/epreuve.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { EpreuveInterface } from '../epreuve/interfaces/epreuve.interface';


@Controller('epreuve')
export class EpreuveController {
    constructor(private epreuveService: EpreuveSerivce) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createEpreuveDto: EpreuveInterface) {
        const epreuve = await this.epreuveService.create(createEpreuveDto);
        if (!epreuve) {
            return 'error in creating epreuve'
        }
        return 'epreuve created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const epreuves: Array<EpreuveInterface> = await this.epreuveService.findAll()
        return epreuves
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const epreuve = await this.epreuveService.findById(id);
        return epreuve;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newEpreuve: any = await this.epreuveService.update(id, body)
        return "epreuve updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.epreuveService.delete(id)
        return "epreuve deleted"
    }
}
