import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get()
  findAll(): Promise<Drivers[]> {
    return this.driversService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string): Promise<Drivers> {
    return this.driversService.findOne(name);
  }

  @Delete(':name')
  remove(@Param('name') name: string): Promise<void> {
    return this.driversService.remove(name);
  }
}
