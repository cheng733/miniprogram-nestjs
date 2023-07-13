import { Controller, Get, Param, Query } from '@nestjs/common';
import { weatherService } from './weather.service';
import { Weather } from '../interfaces/weather.interface';
@Controller()
export class weatherController {
  constructor(private readonly appService: weatherService) {}

  @Get('/weather')
  async getWeather(@Query() params: Weather.params) {
    const {
      data: { code, data },
    } = await this.appService.getWeather(params);
    if (code === 200) {
      return data;
    }
  }
}
