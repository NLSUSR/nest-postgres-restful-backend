import * as NJSC from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/users.model';
import { UsersService } from '../users/users.service';
import { variables } from '../variables';

@NJSC.Injectable()
export class AuthorizationService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  private async generateToken(user: User) {
    const payload = { id: user.id, email: user.email, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(validateUserDto: CreateUserDto) {
    const user = await this.userService.getUsersByEmail(validateUserDto.email);
    const passwordEquals = await bcrypt.compare(
      validateUserDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    } else {
      throw new NJSC.UnauthorizedException({
        message: variables.messages.invalidEP,
      });
    }
  }

  async login(loginUserDto: CreateUserDto) {
    const user = await this.validateUser(loginUserDto);
    return this.generateToken(user);
  }

  async registration(registrationUserDto: CreateUserDto) {
    const candidate = await this.userService.getUsersByEmail(registrationUserDto.email);
    if (candidate) {
      throw new NJSC.HttpException(
        variables.messages.userExist,
        NJSC.HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(registrationUserDto.password, 9);
    const user = await this.userService.createUser({
      ...registrationUserDto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }
}
