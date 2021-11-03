import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drivers } from './drivers.entity';
import { Repository } from 'typeorm';
import { CreateDriverDto } from './dto/create-driver.dto';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Drivers)
    private readonly driverRepository: Repository<Drivers>
  ) {}

  create(createDriverDto: CreateDriverDto): Promise<Drivers> {
    const driver = new Drivers();
    driver.num = createDriverDto.num;
    driver.name = createDriverDto.name;
    driver.team = createDriverDto.team;

    return this.driverRepository.save(driver);
  }

  findAll(): Promise<Drivers[]> {
    return this.driverRepository.find();
  }

  findOne(name: string): Promise<Drivers> {
    return this.driverRepository.findOne(name);
  }

  async remove(name: string): Promise<void> {
    await this.driverRepository.delete(name);
  }
}
