import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  // Configurar títulos de documnentación
  const options = new DocumentBuilder() 
    .setTitle('EVENT REST API')
    .setDescription('API REST - EVENT')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  
  // La ruta en que se sirve la documentación
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe(
    {
      transform: true,
      transformOptions:{
        enableImplicitConversion: true
      }
    }
  ));
  // change to 3000 before to make a push
  app.listen(3000);
  // generar entidades y relaciones
  // npx typeorm-model-generator -h localhost -d DB -u USER -x PASS -e postgres(DBUSER) -o E:/Tempo/NestJS/entities -p 5432
}

bootstrap();

