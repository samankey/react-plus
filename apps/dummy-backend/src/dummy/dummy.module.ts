import { Module } from '@nestjs/common';
import { DummyController } from './dummy.controller';
import { DummyService } from './dummy.service';
import { DummyResolver } from './dummy.resolver';
import { DummyGateway } from './dummy.gateway';

@Module({
  controllers: [DummyController],
  providers: [DummyService, DummyResolver, DummyGateway],
})
export class DummyModule {}
