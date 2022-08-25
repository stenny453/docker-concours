import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { ComposerService } from 'src/composer/composer.service';
import { UserAuthGuard } from 'src/user/guards/user-auth.guard';
import { ComposerInterface } from '../composer/interfaces/composer.interface';


@Controller('composer')
export class ComposerController {
    constructor(private composerService: ComposerService) { }
    @UseGuards(UserAuthGuard)
    @Post()
    async create(@Body() createComposerDto: ComposerInterface) {
        const composer = await this.composerService.create(createComposerDto);
        if (!composer) {
            return 'error in creating composer'
        }
        return 'composer created successfully'
    }
    @Get()
    async findAll(@Req() request: Request) {
        const composer: Array<ComposerInterface> = await this.composerService.findAll()
        return composer
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const composer = await this.composerService.findById(id);
        return composer;
    }
    @UseGuards(UserAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newComposer: any = await this.composerService.update(id, body)
        return "composer updated";
    }
    @UseGuards(UserAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.composerService.delete(id)
        return "composer deleted"
    }
    @Get('relation/:id')
    async getComposer(@Param('id') id: number) {
        const composer = await this.composerService.composer(id);
        return composer;
    }
    @Get('notesCandidat/:id')
    async getCandidatNotes(@Param('id') id: number) {
        const notes = await this.composerService.candidatNotes(id)
        return notes
    }
}
