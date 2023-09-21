import { ApiProperty } from '@nestjs/swagger';
import * as SQLTS from 'sequelize-typescript';
import { Post } from '../posts/posts.model';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

interface UserCreationAttributes {
  email: string;
  password: string;
}

@SQLTS.Table({ tableName: 'users', timestamps: false })
export class User extends SQLTS.Model<User, UserCreationAttributes> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @SQLTS.Column({
    type: SQLTS.DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'example@mail.domain',
    description: 'Адрес электронной почты',
  })
  @SQLTS.Column({
    type: SQLTS.DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  @SQLTS.Column({
    type: SQLTS.DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: true, description: 'Заблокирован' })
  @SQLTS.Column({
    type: SQLTS.DataType.BOOLEAN,
    defaultValue: false,
  })
  blocked: boolean;

  @ApiProperty({ example: 'Оскорбления', description: 'Причина' })
  @SQLTS.Column({
    type: SQLTS.DataType.STRING,
    allowNull: true,
  })
  block_reason: string;

  @SQLTS.BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @SQLTS.HasMany(() => Post)
  posts: Post[];
}
