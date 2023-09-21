import * as NJSC from '@nestjs/common';
import * as Swagger from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@Swagger.ApiTags('Роли')
@NJSC.Controller('/api/roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Swagger.ApiOperation({ summary: 'Создание роли' })
  @Swagger.ApiResponse({ status: 200, type: Role })
  @NJSC.Post('/add')
  async createRole(@NJSC.Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }

  // @Swagger.ApiOperation({ summary: 'Назначение роли' })
  // @Swagger.ApiResponse({ status: 200, type: Role })
  // @NJSC.Get('get_role/:value')
  // async getRoleByValue(@NJSC.Param('value') value: string) {
  //   return this.roleService.getRoleByValue(value);
  // }

  @Swagger.ApiOperation({ summary: 'Получить все роли' })
  @Swagger.ApiResponse({ status: 200, type: [Role] })
  @NJSC.Get()
  async getAllRoles() {
    return this.roleService.getAllRoles();
  }

  @Swagger.ApiOperation({ summary: 'Обновить роль' })
  @Swagger.ApiResponse({ status: 200, type: Role })
  @NJSC.Put('/:id')
  async updateRole(
    @NJSC.Param('id') id: string,
    @NJSC.Body() updateRoleDto: CreateRoleDto,
  ) {
    return this.roleService.updateRole(id, updateRoleDto);
  }

  @Swagger.ApiOperation({ summary: 'Удалить роль' })
  @Swagger.ApiResponse({ status: 200 })
  @NJSC.Delete('/:id')
  async deleteRole(@NJSC.Param('id') id: string) {
    return this.roleService.deleteRole(id);
  }
}
