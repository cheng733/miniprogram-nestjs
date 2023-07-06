import { Module } from '@nestjs/common';
import { weatherController } from './weather.controller';
import { weatherService } from './weather.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [weatherController],
  providers: [weatherService],
})
export class weatherModule {}
