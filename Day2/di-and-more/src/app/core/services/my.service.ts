import { Injectable, OnDestroy } from '@angular/core';
import { MyServiceMock } from './my.service.mock';

@Injectable({
  providedIn:'root'
})
export class MyService implements OnDestroy {

  doAlert() {
    alert('MyService');
  }

  constructor() {
    console.log('MyService ctor');
  }

  ngOnDestroy(): void {
    console.log('MyService ngOnDestroy');
  }
}
