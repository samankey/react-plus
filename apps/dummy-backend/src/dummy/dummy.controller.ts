import { Controller, Get, Query } from '@nestjs/common';
import { DummyModel01 } from './model/DummyModel01';

@Controller('dummy')
export class DummyController {
  @Get('/get-test')
  public async getTest(@Query('req1') req1: string): Promise<DummyModel01> {
    return {
      value1: `${req1}value`,
      value2: 1,
    };
  }
}
