import { Controller, Body, Get, Post, Req, HttpStatus, HttpCode, Put, Param, Delete} from '@nestjs/common';
import { AnimalService } from '../services/animal.service';
import { CreateAnimalDto } from '../dto/CreateAnimalDto';


@Controller('animal')
export class AnimalController {
    constructor(private animalService: AnimalService) {}

    @Get()
    findAll(@Req() request: Request){
        return this.animalService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.animalService.findOne(id);
    }

    @Post()
    create(@Body() createAnimalDto: CreateAnimalDto){

        return this.animalService.create(createAnimalDto);
    }

    @Put(':id')
    update(@Param('id') id: string,  @Body() createAnimalDto: CreateAnimalDto){
        return this.animalService.update(id, createAnimalDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.animalService.delete(id);
    }
}
