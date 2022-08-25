import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { CentreBaccService } from 'src/centreBacc/centreBacc.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { CentreBaccInterface } from '../centreBacc/interfaces/centreBacc.interface';


@Controller('centrebacc')
export class CentreBaccController {
    constructor(private centreBaccService: CentreBaccService) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createCentreBaccDto: CentreBaccInterface) {
        const centreBacc = await this.centreBaccService.create(createCentreBaccDto);
        if (!centreBacc) {
            return 'error in creating centreBacc'
        }
        return 'centreBacc created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const centreBacc: Array<CentreBaccInterface> = await this.centreBaccService.findAll()
        return centreBacc
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const centreConcours = await this.centreBaccService.findById(id);
        return centreConcours;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newCentreBacc: any = await this.centreBaccService.update(id, body)
        return "centreBacc updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.centreBaccService.delete(id)
        return "centreBacc deleted"
    }
}