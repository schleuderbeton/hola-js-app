import { Test, TestingModule } from '@nestjs/testing';
import { HunitController } from './hunit.controller';

describe('HunitController', () => {
  let controller: HunitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HunitController],
    }).compile();

    controller = module.get<HunitController>(HunitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
