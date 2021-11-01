import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  @HttpCode(200)
  findAll(): string {
    return 'Doggies';
    // return { message: "doggies" };
  }
}
