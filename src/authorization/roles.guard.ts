import * as NJSC from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt/dist';
import { Observable } from 'rxjs';
import { variables } from '../variables';
import { ROLES_KEY } from './roles-authorization.decorator';

@NJSC.Injectable()
export class RolesGuard implements NJSC.CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: NJSC.ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );

      if (!requiredRoles) {
        return true;
      }
      const request = context.switchToHttp().getRequest();
      const authorizaionHeader = request.headers.authorization;
      const bearer = authorizaionHeader.split('')[0];
      const token = authorizaionHeader.split('')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new NJSC.UnauthorizedException({
          message: variables.messages.userUnauthorized,
        });
      }

      const user = this.jwtService.verify(token);
      request.user = user;

      return user.roles.some((role: any) => requiredRoles.includes(role.value));
    } catch (error) {
      console.error(error);

      throw new NJSC.HttpException(
        variables.messages.noAccess + ' ' + error,
        NJSC.HttpStatus.FORBIDDEN,
      );
    }
  }
}
