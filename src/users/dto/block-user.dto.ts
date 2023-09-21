import * as Swagger from '@nestjs/swagger';
import * as CV from 'class-validator';

export class BlockUserDto {
  @Swagger.ApiProperty({
    example: 'Идентификатор пользователя',
    description: 'Идентификатор',
  })
  @CV.IsNumber({}, { message: 'Должно быть числовым значением' })
  readonly user_id: number;

  @Swagger.ApiProperty({
    example: 'Оскорбление',
    description: 'Причина блокировки',
  })
  @CV.IsString({ message: 'Должно быть строковым значением' })
  readonly block_reason: string;
}
