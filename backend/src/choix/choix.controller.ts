import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { ChoixService } from 'src/choix/choix.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { ChoixInterface } from '../choix/interfaces/choix.interface';


@Controller('choix')
export class ChoixController {
    constructor(private choixService: ChoixService) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createChoixDto: ChoixInterface) {
        const choix = await this.choixService.create(createChoixDto);
        if (!choix) {
            return 'error in creating choix'
        }
        return 'choix created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const choix: Array<ChoixInterface> = await this.choixService.findAll()
        return choix
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const choix = await this.choixService.findById(id);
        return choix;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newChoix: any = await this.choixService.update(id, body)
        return "choix updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.choixService.delete(id)
        return "choix deleted"
    }

}