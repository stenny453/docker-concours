import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from './entities/user.entity';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserPasswordDto } from './dto/user-password.dto';
import { MailService } from 'src/mail/mail.service';
export declare class UserService {
    private userRepository;
    private jwtService;
    private mailService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService, mailService: MailService);
    register(userData: UserRegisterDto): Promise<{
        id: number;
        email: string;
        role: string;
        firstname: string;
        lastname: string;
    } | {
        message: string;
        error: boolean;
        pseudo: boolean;
    }>;
    login(credentials: UserLoginDto): Promise<{
        message: string;
        error: boolean;
        access_token?: undefined;
    } | {
        access_token: string;
        message?: undefined;
        error?: undefined;
    }>;
    changePassword(credentials: UserPasswordDto, user: UserEntity): Promise<{
        message: string;
        success: boolean;
        error?: undefined;
    } | {
        message: string;
        error: boolean;
        success?: undefined;
    }>;
}
