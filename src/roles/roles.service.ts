import * as NJSC from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@NJSC.Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(@NJSC.Body() createRoleDto: CreateRoleDto) {
    const role = await this.roleRepository.create(createRoleDto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }

  async getAllRoles() {
    const roles = await this.roleRepository.findAll();
    return roles;
  }

  async updateRole(id: string, updateRoleDto: CreateRoleDto) {
    const role = await this.roleRepository.findByPk(id);
    if (!role) {
      throw new NJSC.HttpException(
        'Роль не найдена',
        NJSC.HttpStatus.NOT_FOUND,
      );
    }
    await role.update(updateRoleDto);
    return role;
  }

  async deleteRole(id: string) {
    const role = await this.roleRepository.findByPk(id);
    if (!role) {
      throw new NJSC.HttpException(
        'Роль не найдена',
        NJSC.HttpStatus.NOT_FOUND,
      );
    }
    await role.destroy();
  }
}
