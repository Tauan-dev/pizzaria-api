import { Test, TestingModule } from '@nestjs/testing';
import { PizzariaController } from './pizzaria.controller';

describe('PizzariaController', () => {
  let controller: PizzariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzariaController],
    }).compile();

    controller = module.get<PizzariaController>(PizzariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
