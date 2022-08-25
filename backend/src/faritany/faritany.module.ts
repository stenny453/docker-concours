import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faritany } from 'src/faritany/entities/faritany.entity';
import { FaritanyController } from '../faritany/faritany.controller';
import { FaritanyService } from '../faritany/faritany.service';
@Module({
    imports: [TypeOrmModule.forFeature([Faritany])],
    controllers: [FaritanyController],
    providers: [FaritanyService],
})
export class FaritanyModule { }