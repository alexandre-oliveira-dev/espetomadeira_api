import { Module } from '@nestjs/common';
import { RealeasesResolver } from './releases/realeases.resolver';
import { RealeasesService } from './releases/releases.service';

@Module({
  imports: [],
  controllers: [RealeasesResolver],
  providers: [RealeasesService],
})
export class AppModule {}
