import * as NJSC from '@nestjs/common';
import * as Swagger from '@nestjs/swagger';
import { Roles } from '../authorization/roles-authorization.decorator';
import { RolesGuard } from '../authorization/roles.guard';
import { AddUserRoleDto } from './dto/add-user-role.dto';
import { BlockUserDto } from './dto/block-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Swagger.ApiTags('Пользователи')
@NJSC.Controller('/api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Swagger.ApiOperation({ summary: 'Создание пользователя' })
  @Swagger.ApiResponse({ status: 200, type: User })
  @NJSC.Post('/add')
  createUser(@NJSC.Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Swagger.ApiOperation({ summary: 'Получить пользователя по ID' })
  @Swagger.ApiResponse({ status: 200, type: User })
  @NJSC.Get('/:id')
  getUserById(@NJSC.Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Swagger.ApiOperation({ summary: 'Получить всех пользователей' })
  @Swagger.ApiResponse({ status: 200, type: [User] })
  // @Roles('ADMIN')
  // @NJSC.UseGuards(RolesGuard)
  @NJSC.Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Swagger.ApiOperation({ summary: 'Обновить пользователя' })
  @Swagger.ApiResponse({ status: 200, type: User })
  @NJSC.Put('/:id')
  updateUser(
    @NJSC.Param('id') id: string,
    @NJSC.Body() updateUserDto: CreateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Swagger.ApiOperation({ summary: 'Удалить пользователя' })
  @Swagger.ApiResponse({ status: 200 })
  @NJSC.Delete('/:id')
  deleteUser(@NJSC.Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  @Swagger.ApiOperation({ summary: 'Выдать роль' })
  @Swagger.ApiResponse({ status: 200 })
  // @Roles('ADMIN')
  // @NJSC.UseGuards(RolesGuard)
  @NJSC.Post('/add_role')
  addUserRole(@NJSC.Body() addUserRoleDto: AddUserRoleDto) {
    return this.usersService.addUserRole(addUserRoleDto);
  }

  @Swagger.ApiOperation({ summary: 'Забанить пользователя' })
  @Swagger.ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @NJSC.UseGuards(RolesGuard)
  @NJSC.Post('/block_user')
  blockUser(@NJSC.Body() blockUserDto: BlockUserDto) {
    return this.usersService.blockUser(blockUserDto);
  }
}
