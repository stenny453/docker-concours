import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { CentreFormationService } from 'src/centreFormation/centreFormation.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { CentreFormationInterface } from '../centreFormation/interfaces/centreFormation.interface';


@Controller('centreformation')
export class CentreFormationController {
    constructor(private centreFormationService: CentreFormationService) { }
    // @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createCentreFormationDto: CentreFormationInterface) {
        const centreFormation = await this.centreFormationService.create(createCentreFormationDto);
        if (!centreFormation) {
            return 'error in creating centreFormation'
        }
        return 'centreFormation created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const centreFormation: Array<CentreFormationInterface> = await this.centreFormationService.findAll()
        return centreFormation
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const centreFormation = await this.centreFormationService.findById(id);
        return centreFormation;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newCentreFormation: any = await this.centreFormationService.update(id, body)
        return "centreFormation updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.centreFormationService.delete(id)
        return "centreFormation deleted"
    }
}