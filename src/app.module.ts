import { Module } from '@nestjs/common';
import { AppConfig } from './config/app-config';
import configuration from './config/config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: AppConfig.get('databaseUrl'),
      ssl: true,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [AppConfig],
})
export class AppModule {}
