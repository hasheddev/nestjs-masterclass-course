import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  public get nodeEnv() {
    return process.env.NODE_ENV || 'production';
  }

  public get port() {
    return process.env.PORT || 3000;
  }
}
