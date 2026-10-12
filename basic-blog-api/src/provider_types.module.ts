import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { ConfigService } from '@nestjs/config';

//use when custom instance or cached instance or reuse existing instance in a second dependency
// use to override a class with a mock version for testing
const mockTaskService = {};
const mockConnection = {};

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: AuthService, //equal to just putting class
      useClass: AuthService,
    },
    {
      provide: AuthService,
      useValue: mockTaskService,
    },
    {
      provide: 'CONNECTION', // inject with @Inject("CONNECTION")
      useValue: mockConnection,
    },
    {
      provide: 'NewAuth', //reference same instance under different name
      useExisting: AuthService,
    },
    {
      provide: 'NAuthService', //could be a class or string
      useExisting: AuthService,
    },
    {
      provide: 'Database', //dynamic injection
      useFactory: (service: ConfigService) => {},
      inject: [ConfigService], //could be CONNECTION
    },
  ],
  exports: ['NewAuth'],
})
export class ProviderTypesModule {}
