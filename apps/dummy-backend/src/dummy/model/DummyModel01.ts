import { ApiProperty } from '@nestjs/swagger';

export class DummyModel01 {
  @ApiProperty()
  public value1: string;
  @ApiProperty()
  public value2: number;
}
