import { Module } from '@nestjs/common';
// import { Drivers } from './drivers.entity';
import { DriversModule } from './drivers.module';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';

@Module({
  imports: [DriversModule],
  providers: [DriversService],
  exports: [DriversController]
})
export class DriverHttpModule {}
