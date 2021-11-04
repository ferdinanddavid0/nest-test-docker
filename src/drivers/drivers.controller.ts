import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { Drivers } from './drivers.entity';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto): Promise<Drivers> {
    return this.driversService.create(createDriverDto);
  }

  @Patch(':num')
  update(@Param('num') num: number, @Body() createDriverDto: CreateDriverDto): Promise<Drivers> {
    return this.driversService.update(num, createDriverDto);
  }

  @Get()
  findAll(): Promise<Drivers[]> {
    return this.driversService.findAll();
  }

  @Get(':num')
  findOne(@Param('num') num: number): Promise<Drivers> {
    return this.driversService.findOne(num);
  }

  @Delete(':name')
  remove(@Param('name') name: string): Promise<void> {
    return this.driversService.remove(name);
  }
}
