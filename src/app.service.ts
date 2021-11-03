import { Injectable } from '@nestjs/common';

export interface FormulaOneDrivers {
  num: number;
  driver: string;
  team: string;
}

// export interface FormulaOneConstructors {
//   name: string;
//   drivers: FormulaOneDrivers;
//   engine: string;
//   country: string;
// }

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
    { num: 5, driver: 'Sebastian Vettel', team: 'Aston Martin' },
    { num: 18, driver: 'Lance Stroll', team: 'Aston Martin' },
    { num: 14, driver: 'Fernando Alonso', team: 'Alpine' },
    { num: 31, driver: 'Esteban Ocon', team: 'Alpine' },
    { num: 10, driver: 'Pierre Gasly', team: 'Alpha Tauri' },
    { num: 22, driver: 'Yuki Tsunoda', team: 'Alpha Tauri' },
    { num: 7, driver: 'Kimi Raikkonen', team: 'Alfa Romeo' },
    { num: 99, driver: 'Antonio Giovinazzi', team: 'Alfa Romeo' },
    { num: 6, driver: 'Nicholas Latifi', team: 'Williams' },
    { num: 63, driver: 'George Russell', team: 'Williams' },
    { num: 47, driver: 'Mick Schumacher', team: 'Haas' },
    { num: 9, driver: 'Nikita Mazepin', team: 'Haas' }
  ];
  getF1Drivers(): FormulaOneDrivers[] {
    return this.f1Drivers;
  }

  // getHello(): string {
  //   return 'Hello World! Welcome to the US GP, in the Circuit of the Americas, in Austin, Texas for round 16 of the F1 World Championship';
  // }
}
