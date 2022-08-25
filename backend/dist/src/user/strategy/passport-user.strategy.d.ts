import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { UserPayloadInterface } from 'src/user/interfaces/user-payload.interface';
import { UserEntity } from '../entities/user.entity';
declare const JwtUserStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtUserStrategy extends JwtUserStrategy_base {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    validate(payload: UserPayloadInterface): Promise<any>;
}
export {};
