import { ApiProperty } from '@nestjs/swagger/dist';
import * as SQLTS from 'sequelize-typescript';
import { User } from '../users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttributes {
  value: string;
  description: string;
}

@SQLTS.Table({ tableName: 'roles', timestamps: false  })
export class Role extends SQLTS.Model<Role, RoleCreationAttributes> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @SQLTS.Column({
    type: SQLTS.DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'admin', description: 'Роль' })
  @SQLTS.Column({
    type: SQLTS.DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({ example: 'Администратор', description: 'Описание' })
  @SQLTS.Column({
    type: SQLTS.DataType.STRING,
    allowNull: false,
  })
  description: string;

  @SQLTS.BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
