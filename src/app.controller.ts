import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService, Cat, CatsService } from './app.service';
import { Request, Ip, Body, Param, Header } from '@nestjs/common';

@Controller({ host: 'admin.example.com' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  getCats(@Ip() Ip) {
    return this.catsService.getCats();
  }

  @Get(':id')
  getCatById(@Param() params): Cat {
    return this.catsService.getCatById(params.id);
  }

  @Post()
  // @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body() params: Cat): Cat {
    return this.catsService.create(params);
  }
}
