import * as NJSC from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { AuthorizationModule } from '../authorization/authorization.module';
import { FilesModule } from '../files/files.module';
import { Post } from '../posts/posts.model';
import { PostsModule } from '../posts/posts.module';
import { Role } from '../roles/roles.model';
import { RolesModule } from '../roles/roles.module';
import { UserRoles } from '../roles/user-roles.model';
import { User } from '../users/users.model';
import { UsersModule } from '../users/users.module.js';

@NJSC.Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
      serveStaticOptions: { redirect: false, index: false },
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, Post],
      autoLoadModels: true,
    }),
    NJSC.forwardRef(() => UsersModule),
    NJSC.forwardRef(() => RolesModule),
    NJSC.forwardRef(() => AuthorizationModule),
    NJSC.forwardRef(() => PostsModule),
    NJSC.forwardRef(() => FilesModule),
  ],
})
export class AppModule {}
