import { Injectable } from '@nestjs/common';
import { marked } from '../utils/markdown';

@Injectable()
export class ConverterService {
  convertMdtoHtml(content: string): string {
    return marked.parse(content).toString();
  }
}
