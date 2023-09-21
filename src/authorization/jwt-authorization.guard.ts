import * as NJSC from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { variables } from '../variables';

@NJSC.Injectable()
export class JwtAuthorizationGuard implements NJSC.CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: NJSC.ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const authorizaionHeader = request.headers.authorization;
      const bearer = authorizaionHeader.split()[0];
      const token = authorizaionHeader.split()[1];

      if (bearer !== 'Bearer' || !token) {
        throw new NJSC.UnauthorizedException({
          message: variables.messages.userUnauthorized,
        });
      }

      const user = this.jwtService.verify(token);
      request.user = user;

      return true;
    } catch (error) {
      console.error(error);

      throw new NJSC.UnauthorizedException({
        message: variables.messages.userUnauthorized + ' ' + error,
      });
    }
  }
}
