import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsString, IsNumber } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'Здесь заголовок',
    description: 'Заголовок',
  })
  @IsString()
  readonly title: string;

  @ApiProperty({
    example: 'Здесь контент',
    description: 'Контент',
  })
  @IsString()
  readonly content: string;

  @ApiProperty({
    example: 'Идентификатор пользователя',
    description: 'Идентификатор',
  })
  @IsNumber()
  readonly user_id: number;
}
