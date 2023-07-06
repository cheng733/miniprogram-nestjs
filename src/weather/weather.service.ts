import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { token } from '../config';
import { Weather } from '../interfaces/weather.interface';
@Injectable()
export class weatherService {
  constructor(private readonly httpService: HttpService) {}
  async getWeather(params: Weather.params): Promise<any> {
    const raw = await firstValueFrom(
      this.httpService
        .post('https://v2.alapi.cn/api/tianqi', {
          token,
          ...params,
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happended on weather service';
          }),
        ),
    );
    return raw;
  }
}
