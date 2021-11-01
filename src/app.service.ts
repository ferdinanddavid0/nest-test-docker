import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Welcome to the USGP, in the Circuit of the Americas, in Austin, Texas';
  }
}
