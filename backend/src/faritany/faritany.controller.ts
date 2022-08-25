import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { FaritanyService } from 'src/faritany/faritany.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { FaritanyInterface } from '../faritany/interfaces/faritany.interface';


@Controller('faritany')
export class FaritanyController {
    constructor(private faritanyService: FaritanyService) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createFaritanyDto: FaritanyInterface) {
        const faritany = await this.faritanyService.create(createFaritanyDto);
        if (!faritany) {
            return 'error in creating faritany'
        }
        return 'faritany created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const faritany: Array<FaritanyInterface> = await this.faritanyService.findAll()
        return faritany
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const faritany = await this.faritanyService.findById(id);
        return faritany;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newFaritany: any = await this.faritanyService.update(id, body)
        return "faritany updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.faritanyService.delete(id)
        return "faritany deleted"
    }
}