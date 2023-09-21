import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'example@mail.domain',
    description: 'Адрес электронной почты',
  })
  @IsString({ message: 'Должно быть строковым значением' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @ApiProperty({
    example: 'qwertyui12345678',
    description: 'Пароль учетной записи',
  })
  @IsString({ message: 'Должно быть строковым значением' })
  @Length(8, 32, {
    message: 'Длинна должна быть не менее 8 и не более 32 знаков',
  })
  readonly password: string;
}
