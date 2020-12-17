import { Module } from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService, CatsService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
