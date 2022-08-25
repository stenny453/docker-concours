import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { CentreConcoursService } from 'src/centreConcours/centreConcours.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { CentreConcoursInterface } from '../centreConcours/interfaces/centreConcours.interface';


@Controller('centreconcours')
export class CentreConcoursController {
    constructor(private centreConcoursService: CentreConcoursService) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createCentreConcoursDto: CentreConcoursInterface) {
        const centreConcours = await this.centreConcoursService.create(createCentreConcoursDto);
        if (!centreConcours) {
            return 'error in creating centreConcours'
        }
        return 'centreConcours created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const centreConcours: Array<CentreConcoursInterface> = await this.centreConcoursService.findAll()
        return centreConcours
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const centreConcours = await this.centreConcoursService.findById(id);
        return centreConcours;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newCentreConcours: any = await this.centreConcoursService.update(id, body)
        return "centreConcours updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.centreConcoursService.delete(id)
        return "centreConcours deleted"
    }
}