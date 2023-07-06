import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { token } from '../config';
@Injectable()
export class NewsService {
  constructor(private readonly httpService: HttpService) {}
  async getNews(): Promise<any> {
    const raw = await firstValueFrom(
      this.httpService
        .post('https://v2.alapi.cn/api/zaobao', {
          token,
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happended on news service';
          }),
        ),
    );
    return raw;
  }
}
