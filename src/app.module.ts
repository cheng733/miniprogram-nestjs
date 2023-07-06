import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { weatherModule } from './weather/weather.module';

@Module({
  imports: [NewsModule, weatherModule],
})
export class AppModule {}
