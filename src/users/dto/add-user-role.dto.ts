import * as Swagger from '@nestjs/swagger';
import * as CV from 'class-validator';

export class AddUserRoleDto {
  @Swagger.ApiProperty({
    example: 'admin',
    description: 'Роль пользователя',
  })
  @CV.IsString({ message: 'Должно быть строковым значением' })
  readonly value: string;

  @Swagger.ApiProperty({
    example: 'Идентификатор пользователя',
    description: 'Идентификатор',
  })
  @CV.IsNumber({}, { message: 'Должно быть числовым значением' })
  readonly user_id: number;
}
