import * as NJSC from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';

@NJSC.Module({
  controllers: [AuthorizationController],
  providers: [AuthorizationService],
  imports: [
    NJSC.forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  exports: [AuthorizationService, JwtModule],
})
export class AuthorizationModule {}
