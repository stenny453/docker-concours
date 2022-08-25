import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Droit } from './entities/droit.entity';
import { DroitController } from '../droit/droit.controller';
import { DroitService } from '../droit/droit.service';

@Module({
    imports: [TypeOrmModule.forFeature([Droit])],
    controllers: [DroitController],
    providers: [DroitService],
})
export class DroitModule { }