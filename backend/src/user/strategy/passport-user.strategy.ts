import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPayloadInterface } from 'src/user/interfaces/user-payload.interface';
import { UserEntity } from '../entities/user.entity';
import * as dotenv from 'dotenv';

dotenv.config();

const SECRET = 'backendSecret';

@Injectable()
export class JwtUserStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // secretOrKey: process.env.MODEL_SECRET,
      secretOrKey: SECRET,
    });
  }

  async validate(payload: UserPayloadInterface) {
    let user: any = null;
    user = await this.userRepository.findOne({ email: payload.email });
    if (user) {
      const { password, salt, ...result } = user;
      return result;
    } else {
      throw new UnauthorizedException();
    }
  }
}
