import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ConverterService } from 'src/core-modules/converter.service';
import * as stream from 'stream';
class MdContentDto {
  content: string;
}

@Controller('md')
export class ConverterController {
  constructor(
    @Inject(ConverterService) private converterService: ConverterService,
  ) {}

  @Post('to-html')
  convertMdToHtml(@Body() body: MdContentDto, @Res() res: Response) {
    const convertedHtml = this.converterService.convertMdtoHtml(body.content);

    res.setHeader('Content-Type', 'text/html');
    const readable = new stream.Readable();
    readable._read = () => {};
    readable.push(convertedHtml);
    readable.push(null);
    readable.pipe(res);
  }
}
