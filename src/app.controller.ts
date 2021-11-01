import { Controller, Get } from '@nestjs/common';
import { AppService, FormulaOneDrivers } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('f1/drivers')
  getF1Cars(): FormulaOneDrivers[] {
    return this.appService.getF1Drivers();
  }
}
