import { ApiProperty } from '@nestjs/swagger/dist';
import * as SQLTS from 'sequelize-typescript';
import { User } from '../users/users.model';

interface PostCreationAttributes {
  title: string;
  content: string;
  user_id: number;
  image: string;
}

@SQLTS.Table({ tableName: 'posts', timestamps: false  })
export class Post extends SQLTS.Model<Post, PostCreationAttributes> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @SQLTS.Column({
    type: SQLTS.DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Это заголовок',
    description: 'Заголовок',
  })
  @SQLTS.Column({
    type: SQLTS.DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: 'Тут будет контент', description: 'Контент' })
  @SQLTS.Column({
    type: SQLTS.DataType.STRING,
    allowNull: false,
  })
  content: string;

  @ApiProperty({ example: 'Тут будет изображение', description: 'Изображение' })
  @SQLTS.Column({ type: SQLTS.DataType.STRING })
  image: string;

  @ApiProperty({
    example: 'Идентификатор пользователя',
    description: 'Идентификатор',
  })
  @SQLTS.ForeignKey(() => User)
  @SQLTS.Column({ type: SQLTS.DataType.INTEGER })
  user_id: number;

  @SQLTS.BelongsTo(() => User)
  author: User;
}
