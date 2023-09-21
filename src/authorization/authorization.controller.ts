import * as NJSC from '@nestjs/common';
import * as Swagger from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { variables } from '../variables';
import { AuthorizationService } from './authorization.service';

@Swagger.ApiTags(variables.documentation.tags.authorization)
@NJSC.Controller('/api/')
export class AuthorizationController {
  constructor(private autorizationService: AuthorizationService) {}

  @Swagger.ApiOperation({ summary: 'Авторизация' })
  @Swagger.ApiResponse({ status: 200 })
  @NJSC.Post('/login')
  login(@NJSC.Body() loginDto: CreateUserDto) {
    return this.autorizationService.login(loginDto);
  }

  @Swagger.ApiOperation({ summary: 'Регистрация' })
  @Swagger.ApiResponse({ status: 200 })
  @NJSC.Post('/registration')
  registration(@NJSC.Body() registrationDto: CreateUserDto) {
    return this.autorizationService.registration(registrationDto);
  }
}
