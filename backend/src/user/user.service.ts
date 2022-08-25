import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from './entities/user.entity';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserPasswordDto } from './dto/user-password.dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
    private mailService: MailService,
  ) { }

  async register(userData: UserRegisterDto) {
    const verifyEmail = await this.userRepository.findOne({
      email: userData.email,
    });
    if (verifyEmail) {
      return {
        message: "L'\tadresse email existe déjà",
        error: true,
        pseudo: true,
      };
    }

    const user = await this.userRepository.create({
      ...userData,
    });
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      firstname: user.firstname,
      lastname: user.lastname,
    };
    const jwt = await this.jwtService.sign(payload);
    await this.userRepository.save(user);
    try {
      await this.mailService.sendMessage({
        object: 'Nouveau compte',
        email: 'test@gmail.com',
        message: 'Votre Compte est crée',
        nom: 'myName'
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        "Une erreur s'est produite ",
        error,
      );
    } finally {
      return payload;
    }
  }

  async login(credentials: UserLoginDto) {
    const { email, password } = credentials;
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', {
        email,
      })
      .getOne();

    if (!user) {
      return {
        message: 'Email ou mot de passe erronée',
        error: true,
      };
      // throw new NotFoundException('Pseudo ou mot de passe erronée');
    }

    const hashPassword = await bcrypt.hash(password, user.salt);
    if (hashPassword === user.password) {
      const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
        firstname: user.firstname,
        lastname: user.lastname,
      };
      const jwt = await this.jwtService.sign(payload);
      return {
        access_token: jwt,
      };
    } else {
      return {
        message: 'Pseudo ou mot de passe erronée',
        error: true,
      };
      // throw new NotFoundException('Pseudo ou mot de passe erronée');
    }
  }

  async changePassword(credentials: UserPasswordDto, user: UserEntity) {
    const { oldPassword, newPassword } = credentials;
    const newUser = await this.userRepository.findOne(user);
    const hashPassword = await bcrypt.hash(oldPassword, newUser.salt);
    if (hashPassword === newUser.password) {
      newUser.salt = await bcrypt.genSalt();
      newUser.password = await bcrypt.hash(newPassword, newUser.salt);
      await this.userRepository.save(newUser);
      return {
        message: 'Mot de passe reinitialisé',
        success: true,
      };
    } else {
      return {
        message: 'Mot de passe erronée',
        error: true,
      };
      // throw new NotFoundException('Pseudo ou mot de passe erronée');
    }
  }
}
