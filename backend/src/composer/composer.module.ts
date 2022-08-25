import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Composer } from 'src/composer/entities/composer.entity';
import { ComposerController } from '../composer/composer.controller';
import { ComposerService } from '../composer/composer.service';
@Module({
  imports: [TypeOrmModule.forFeature([Composer])],
  controllers: [ComposerController],
  providers: [ComposerService],
})
export class ComposerModule { }
