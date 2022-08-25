import { IsEmail, IsNotEmpty } from 'class-validator';

export class SerieDto {
  @IsNotEmpty()
  codeSerie: number;

  @IsNotEmpty()
  libelleSerie: string;
}
