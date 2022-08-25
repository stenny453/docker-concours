import { UserService } from './user.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserEntity } from './entities/user.entity';
import { UserLoginDto } from './dto/user-login.dto';
import { UserPasswordDto } from './dto/user-password.dto';
import { ConfigService } from '@nestjs/config';
export declare class UserController {
    private userService;
    private configService;
    constructor(userService: UserService, configService: ConfigService);
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
    changePassword(user: UserEntity, data: UserPasswordDto): Promise<{
        message: string;
        success: boolean;
        error?: undefined;
    } | {
        message: string;
        error: boolean;
        success?: undefined;
    }>;
    uploadFiles(files: any): {
        path_diploma: any;
        path_cin: any;
        path_civil: any;
    };
    uploadAlbums(files: any): {
        paths: string[];
    };
    updateProfile(file: any): {
        path: any;
    };
    verifyToken(data: any, user: any): Promise<{
        role: any;
    }>;
}
