import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentreBacc } from 'src/centreBacc/entities/centreBacc.entity';
import { CentreBaccController } from '../centreBacc/centreBacc.controller';
import { CentreBaccService } from '../centreBacc/centreBacc.service';
@Module({
    imports: [TypeOrmModule.forFeature([CentreBacc])],
    controllers: [CentreBaccController],
    providers: [CentreBaccService],
})
export class CentreBaccModule { }