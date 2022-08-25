import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserEntity } from './entities/user.entity';
import { UserLoginDto } from './dto/user-login.dto';
import { User } from 'src/decorators/user.decorator';
import { UserAuthGuard } from './guards/user-auth.guard';
import { UserPasswordDto } from './dto/user-password.dto';
import { ConfigService } from '@nestjs/config';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  // @UseGuards(UserAuthGuard)
  @Post('register')
  async register(@Body() userData: UserRegisterDto) {
    return await this.userService.register(userData);
  }

  @Post('login')
  async login(@Body() credentials: UserLoginDto) {
    return await this.userService.login(credentials);
  }

  @UseGuards(UserAuthGuard)
  @Post('changePassword')
  async changePassword(
    @User() user: UserEntity,
    @Body() data: UserPasswordDto,
  ) {
    return await this.userService.changePassword(data, user);
  }

  @Post('upload/albums')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'diploma', maxCount: 1 },
      { name: 'cin', maxCount: 1 },
      { name: 'civil', maxCount: 1 },
    ]),
  )
  uploadFiles(@UploadedFiles() files) {
    return {
      path_diploma:
        this.configService.get('PATH_UPLOAD') + files.diploma[0].filename,
      path_cin: this.configService.get('PATH_UPLOAD') + files.cin[0].filename,
      path_civil:
        this.configService.get('PATH_UPLOAD') + files.civil[0].filename,
    };
  }

  @Post('upload/photos')
  @UseInterceptors(FilesInterceptor('files'))
  uploadAlbums(@UploadedFiles() files) {
    const paths: string[] = [];
    for (let index = 0; index < files.length; index++) {
      paths.push(this.configService.get('PATH_UPLOAD') + files[index].filename);
    }
    return {
      paths: paths,
    };
  }

  @Post('upload/profile')
  @UseInterceptors(FileInterceptor('file'))
  updateProfile(@UploadedFile() file) {
    // console.log('File ',file)
    return {
      path: this.configService.get('PATH_UPLOAD') + file.filename,
    };
  }

  @UseGuards(UserAuthGuard)
  @Post('verify_token')
  async verifyToken(@Body() data, @User() user) {
    return {
      role: user.role,
    };
  }
}
