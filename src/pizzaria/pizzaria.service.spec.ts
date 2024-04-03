import { Test, TestingModule } from '@nestjs/testing';
import { PizzariaService } from './pizzaria.service';

describe('PizzariaService', () => {
  let service: PizzariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzariaService],
    }).compile();

    service = module.get<PizzariaService>(PizzariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
