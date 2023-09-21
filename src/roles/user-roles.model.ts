import * as SQLTS from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Role } from './roles.model';

@SQLTS.Table({ tableName: 'user_roles', timestamps: false })
export class UserRoles extends SQLTS.Model<UserRoles> {
  @SQLTS.Column({
    type: SQLTS.DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @SQLTS.ForeignKey(() => Role)
  @SQLTS.Column({ type: SQLTS.DataType.INTEGER })
  role_id: number;

  @SQLTS.ForeignKey(() => User)
  @SQLTS.Column({ type: SQLTS.DataType.INTEGER })
  user_id: number;
}
