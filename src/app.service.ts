import { Injectable } from '@nestjs/common';

export interface Cat {
  name: string;
  food: Array<string>;
  id?: number;
}
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class CatsService {
  getCats(): Cat {
    return {
      name: 'mimi',
      food: ['fish'],
    };
  }
  getCatById(id: number): Cat {
    return {
      id,
      name: 'mimi',
      food: ['fish'],
    };
  }
  create(params): Cat {
    console.log('params', params);
    return {
      name: params.name,
      food: params.food,
    };
  }
}
