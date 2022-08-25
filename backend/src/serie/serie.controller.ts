import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { SerieService } from 'src/serie/serie.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { SerieInterface } from '../serie/interfaces/serie.interface';


@Controller('series')
export class SerieController {
    constructor(private serieService: SerieService) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createSerieDto: SerieInterface) {
        const serie = await this.serieService.create(createSerieDto);
        if (!serie) {
            return 'error in creating serie'
        }
        return 'serie created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const series: Array<SerieInterface> = await this.serieService.findAll()
        return series
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const serie = await this.serieService.findById(id);
        return serie;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newSerie: any = await this.serieService.update(id, body)
        return "serie updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.serieService.delete(id)
        return "serie deleted"
    }
    @Get('relation/:id')
    async getSerie(@Param('id') id: number) {
        const serie = await this.serieService.serie(id);
        return serie;
    }
}
