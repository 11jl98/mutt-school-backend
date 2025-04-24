import { Module } from '@nestjs/common';
import { AnimalController } from './controllers/animal.controller';
import { AnimalService } from './services/animal.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Animal } from './models/animal.model';

@Module({
  imports: [SequelizeModule.forFeature([Animal])],
  controllers: [AnimalController],
  providers: [AnimalService]
})
export class AnimalModule {}
