import { APP_INITIALIZER, Injectable, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { createInjectableType } from '@angular/compiler';
import { MyService } from './services/my.service';
import { MyServiceMock } from './services/my.service.mock';
import { MICROPROJECT_LANGUAGE } from './injection-tokens';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    // { provide: MyService, useClass: MyService }
    // same as:
    // MyService
    //{ provide: MyService, useClass: MyServiceMock },
    // { provide: MyService, useValue: { doAlert: () => alert('FROM CORE') } }
    // { provide: MICROPROJECT_LANGUAGE, useValue: 'he-IL' }
  ]
})
export class CoreModule { }
