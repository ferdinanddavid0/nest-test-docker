import { Controller, Get, HttpCode, Post, Query, Body, Put, Param, Delete, UsePipes } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog-dto';
import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dog.interface';
// import { JoiValidationPipe } from './JoiValidationPipe';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Post()
  // @UsePipes(new JoiValidationPipe(createDogSchema))
  async create(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
    // return 'add new dog';
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
    // return { message: "doggies" };
  }
}
