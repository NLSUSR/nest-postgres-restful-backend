import { NestFactory } from '@nestjs/core';
import * as Swagger from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { ValidationPipe } from './pipes/validation.pipe';
import { variables } from './variables';

let server: any;

(async function () {
  const PORT = process.env.APP_PORT || 1000;
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new Swagger.DocumentBuilder()
    .setTitle(variables.documentation.title)
    .setDescription(variables.documentation.description)
    .setVersion(variables.documentation.version)
    .build();

  const document = Swagger.SwaggerModule.createDocument(app, config);

  Swagger.SwaggerModule.setup('/api/docs', app, document);

  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`started on port = ${PORT}`));
  server = app;
})();

export { server };
