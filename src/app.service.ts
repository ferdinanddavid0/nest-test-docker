import { Injectable } from '@nestjs/common';

export interface FormulaOneDrivers {
  num: number;
  driver: string;
  team: string;
}

@Injectable()
export class AppService {
  private f1Drivers: FormulaOneDrivers[] = [
    { num: 33, driver: 'Max Verstappen', team: 'Red Bull Racing Honda' },
    { num: 11, driver: 'Sergio Perez', team: 'Red Bull Racing Honda' },
    { num: 44, driver: 'Lewis Hamilton', team: 'Mercedes' },
    { num: 77, driver: 'Valtteri Bottas', team: 'Mercedes' },
    { num: 16, driver: 'Charles Leclerc', team: 'Ferrari' },
    { num: 55, driver: 'Carlos Sainz', team: 'Ferrari' },
    { num: 3, driver: 'Daniel Ricciardo', team: 'Mclaren Mercedes' },
    { num: 4, driver: 'Lando Norris', team: 'Mclaren Mercedes' },
  ];
  getF1Drivers(): FormulaOneDrivers[] {
    return this.f1Drivers;
  }

  getHello(): string {
    return 'Hello World! Welcome to the US GP, in the Circuit of the Americas, in Austin, Texas for round 16 of the F1 World Championship';
  }
}
