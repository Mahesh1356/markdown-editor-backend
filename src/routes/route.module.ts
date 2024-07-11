import { Module } from '@nestjs/common';
import { ConverterController } from './converter.route';
import { CoreModule } from 'src/core-modules/core.module';

@Module({
  imports: [CoreModule],
  controllers: [ConverterController],
  exports: [],
})
export class RouteModule {}
