import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsController } from './cars.controller';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';
import { Car } from './entities/car';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarsController],
  providers: [CarsService, CarsResolver],
  exports: [CarsService]
})
export class CarsModule {}
