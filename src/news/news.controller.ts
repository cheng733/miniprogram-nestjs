import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller()
export class NewsController {
  constructor(private readonly appService: NewsService) {}

  @Get('/news')
  async getNews() {
    const {
      data: { code, data },
    } = await this.appService.getNews();
    if (code === 200) {
      return data;
    }
  }
}
