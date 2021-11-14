import { Test, TestingModule } from '@nestjs/testing';
import { TesticoController } from './testico.controller';

describe('TesticoController', () => {
  let controller: TesticoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TesticoController],
    }).compile();

    controller = module.get<TesticoController>(TesticoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
