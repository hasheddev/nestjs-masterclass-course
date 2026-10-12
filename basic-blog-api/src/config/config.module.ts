import { Module } from '@nestjs/common';
import { AppConfigService } from './config.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AppConfigService],
  exports: [],
})
export class AppConfigModule {}
