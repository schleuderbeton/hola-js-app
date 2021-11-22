import { Test, TestingModule } from '@nestjs/testing';
import { TesticoService } from './testico.service';

describe('TesticoService', () => {
  let service: TesticoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TesticoService],
    }).compile();

    service = module.get<TesticoService>(TesticoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
