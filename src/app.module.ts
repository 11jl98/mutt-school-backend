import { Module } from '@nestjs/common';
import { AppConfig } from './config/app-config';
import configuration from './config/config';
import { ConfigModule } from '@nestjs/config';
import { Animal } from './animal/models/animal.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnimalModule } from './animal/animal.module';
import {  } from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: configuration().database.host,
      port: configuration().database.port,
      username: configuration().database.username,
      password: configuration().database.password,
      database: configuration().database.name,
      models: [Animal],
      autoLoadModels: true,
      synchronize: true,
    }),
    AnimalModule,
  ],
  controllers: [],
  providers: [AppConfig],
})
export class AppModule {}
