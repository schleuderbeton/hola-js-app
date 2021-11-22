import { Test, TestingModule } from '@nestjs/testing';
import { HunitService } from './hunit.service';

describe('HunitService', () => {
  let service: HunitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HunitService],
    }).compile();

    service = module.get<HunitService>(HunitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
