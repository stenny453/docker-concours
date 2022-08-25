import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentreFormation } from 'src/centreFormation/entities/centreFormation.entity';
import { CentreFormationController } from '../centreFormation/centreFormation.controller';
import { CentreFormationService } from '../centreFormation/centreFormation.service';
@Module({
    imports: [TypeOrmModule.forFeature([CentreFormation])],
    controllers: [CentreFormationController],
    providers: [CentreFormationService],
})
export class CentreFormationModule { }