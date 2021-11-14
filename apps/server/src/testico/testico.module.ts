import { Module } from '@nestjs/common';
import { TesticoController } from './testico.controller';

@Module({
  controllers: [TesticoController]
})
export class TesticoModule {}
