import { Body, Controller, Post, Res } from '@nestjs/common';
import { marked } from './utils/markdown';
import { Response } from 'express';
import * as stream from 'stream';
class MdContentDto {
  content: string;
}

@Controller('md')
export class AppController {

  @Post('to-html')
  convertMdToHtml(@Body() body: MdContentDto, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', 'attachment; filename="page.html"');
    const readable = new stream.Readable();
    readable._read = () => {};
    readable.push(marked.parse(body.content).toString());
    readable.push(null);
    readable.pipe(res);
  }
}
