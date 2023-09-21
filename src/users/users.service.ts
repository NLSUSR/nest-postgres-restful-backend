import * as NJSC from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from '../roles/roles.service';
import { AddUserRoleDto } from './dto/add-user-role.dto';
import { BlockUserDto } from './dto/block-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@NJSC.Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    const role = await this.roleService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findByPk(id, {
      include: { all: true },
    });
    if (!user) {
      throw new NJSC.HttpException(
        'Пользователь не найден',
        NJSC.HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUsersByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async updateUser(id: string, updateUserDto: CreateUserDto) {
    const user = await this.userRepository.findByPk(id);
    if (!user) {
      throw new NJSC.HttpException(
        'Пользователь не найден',
        NJSC.HttpStatus.NOT_FOUND,
      );
    }
    await user.update(updateUserDto);
    return user;
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.findByPk(id);
    if (!user) {
      throw new NJSC.HttpException(
        'Пользователь не найден',
        NJSC.HttpStatus.NOT_FOUND,
      );
    }
    await user.destroy();
  }

  async addUserRole(addUserRoleDto: AddUserRoleDto) {
    const user = await this.userRepository.findByPk(addUserRoleDto.user_id);
    const role = await this.roleService.getRoleByValue(addUserRoleDto.value);
    if (role && user) {
      await user.$add('role', role.id);
      return addUserRoleDto;
    }
    throw new NJSC.HttpException(
      'Пользователь или роль не найдены',
      NJSC.HttpStatus.NOT_FOUND,
    );
  }

  async blockUser(blockUserDto: BlockUserDto) {
    const user = await this.userRepository.findByPk(blockUserDto.user_id);
    if (!user) {
      throw new NJSC.HttpException(
        'Пользователь не найден',
        NJSC.HttpStatus.NOT_FOUND,
      );
    }
    user.blocked = true;
    user.block_reason = blockUserDto.block_reason;
    await user.save();
    return user;
  }
}
