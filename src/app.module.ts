import { Module } from '@nestjs/common';
import { RouteModule } from './routes/route.module';

@Module({
  imports: [RouteModule],
})
export class AppModule {}
