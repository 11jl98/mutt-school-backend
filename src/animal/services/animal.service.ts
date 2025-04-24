import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Animal } from '../models/animal.model';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { CreateAnimalDto } from '../dto/CreateAnimalDto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AnimalService {
    constructor( 
        @InjectModel(Animal) private animal: typeof Animal) {}

    async findAll() {
        return await Animal.findAll();
    }

    async findOne(id: string){
        return await Animal.findOne({ where: { id } });
    }
    
    async create(createAnimalDto: CreateAnimalDto) {
        try{
            const animal = await this.animal.create(createAnimalDto as any);
            return {
              statusCode: HttpStatus.CREATED,
              message: 'Animal criado com sucesso',
              data: animal
            };
    }catch(error){
            throw new HttpException('Erro ao cadastrar animal', HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: string, createAnimalDto: CreateAnimalDto){
        try { 
            const animal =  await this.animal.findOne({ where: { id } });
            if (!animal) {
                throw new HttpException('Animal não encontrado', HttpStatus.NOT_FOUND);
            }
            Object.assign(animal, createAnimalDto);
            const animalUpdated = await animal.save();
            return {
                statusCode: HttpStatus.OK,
                message: 'Animal atualizado com sucesso',
                data: animalUpdated
            }
        }catch(error){
            throw new HttpException('Erro ao atualizar animal', HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string){
        try{ 
            const animal = await this.animal.findOne({ where: { id } });
            if (!animal) {
                throw new HttpException('Animal não encontrado', HttpStatus.NOT_FOUND);
            }
            await animal.destroy();
            return {
                statusCode: HttpStatus.OK,
                message: 'Animal deletado com sucesso'
            }
        }catch(error){
            throw new HttpException('Erro ao deletar animal', HttpStatus.BAD_REQUEST);
        }
    }
}
