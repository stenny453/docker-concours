import { IsNotEmpty } from 'class-validator';

export class UserPasswordDto {
  @IsNotEmpty()
  oldPassword: string;

  @IsNotEmpty()
  newPassword: string;
}
