import * as NJSC from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthorizationModule } from '../authorization/authorization.module';
import { Post } from '../posts/posts.model';
import { Role } from '../roles/roles.model';
import { RolesModule } from '../roles/roles.module';
import { UserRoles } from '../roles/user-roles.model';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@NJSC.Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    NJSC.forwardRef(() => RolesModule),
    NJSC.forwardRef(() => AuthorizationModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
