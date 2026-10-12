import { Injectable, Scope } from '@nestjs/common';

@Injectable({})
export class SingletonProvider {}

//one for every request and it dies after the request ends
@Injectable({ scope: Scope.REQUEST })
export class RequestProvider {}

//new per every injections
@Injectable({ scope: Scope.TRANSIENT })
export class UnitProvider {}
