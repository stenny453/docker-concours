import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { TypeCandidatService } from 'src/typeCandidat/typeCandidat.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { TypeCandidatInterface } from '../typeCandidat/interfaces/typeCandidat.interface';


@Controller('typecandidat')
export class TypeCandidatController {
    constructor(private typeCandidatService: TypeCandidatService) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createTypeCandidatDto: TypeCandidatInterface) {
        const typeCandidat = await this.typeCandidatService.create(createTypeCandidatDto);
        if (!typeCandidat) {
            return 'error in creating type candidat'
        }
        return 'type candidat created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const typeCandidat: Array<TypeCandidatInterface> = await this.typeCandidatService.findAll()
        return typeCandidat
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const typeCandidat = await this.typeCandidatService.findById(id);
        return typeCandidat;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newTypeCandidat: any = await this.typeCandidatService.update(id, body)
        return "type candidat updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.typeCandidatService.delete(id)
        return "type candidat deleted"
    }
}