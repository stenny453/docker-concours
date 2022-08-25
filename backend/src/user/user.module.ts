import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './entities/user.entity';
import { JwtUserStrategy } from './strategy/passport-user.strategy';
import { MailModule } from 'src/mail/mail.module';

const SECRET = 'backendSecret';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      // secret: process.env.MODEL_SECRET,
      secret: SECRET,
      signOptions: { expiresIn: '86400s' },
    }),
    MailModule,
  ],
  controllers: [UserController],
  providers: [UserService, JwtUserStrategy],
  exports: [UserService],
})
export class UserModule {}
