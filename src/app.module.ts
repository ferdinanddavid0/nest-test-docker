import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
// import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { DriversController } from './drivers/drivers.controller';
import { Drivers } from './drivers/drivers.entity';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'david.ferdinand@localhost',
      password: '',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true
    }),
    DriversModule
  ],
  controllers: [AppController, DogsController, DriversController],
  providers: [AppService, DogsService]
})
export class AppModule /*implements NestModule*/ {
  /*
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  } */
}
