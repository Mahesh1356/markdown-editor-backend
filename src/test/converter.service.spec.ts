import { Test, TestingModule } from '@nestjs/testing';
import { ConverterService } from '../core-modules/converter.service';

describe('ConverterService', () => {
  let converterService: ConverterService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ConverterService],
    }).compile();

    converterService = app.get<ConverterService>(ConverterService);
  });

  describe('root', () => {
    it('should return "<p>Hello World</p>"', () => {
      const result = converterService.convertMdtoHtml('Hello World').trim();
      expect(result).toBe('<p>Hello World</p>');
    });
  });
});
