import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
// @UsePipes(ValidationPipe) // Esta aqui para hacer la validacion global (DRY)
export class CarsController {
  //La inyeccion de dependencia se agrega en el constructor
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
    // return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCardDto: CreateCarDto) {
    return this.carsService.create(createCardDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete()
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
