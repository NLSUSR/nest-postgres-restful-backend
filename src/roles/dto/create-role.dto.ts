import * as Swagger from '@nestjs/swagger';
import * as CV from "class-validator"

export class CreateRoleDto {
  @Swagger.ApiProperty({
    example: 'admin',
    description: 'Роль пользователя',
  })
  @CV.IsString()
  readonly value: string;

  @Swagger.ApiProperty({
    example: 'Администратор',
    description: 'Описание роли пользователя',
  })
  @CV.IsString()
  readonly description: string;
}
