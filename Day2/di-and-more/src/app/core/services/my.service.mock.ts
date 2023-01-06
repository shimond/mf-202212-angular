import { Injectable } from "@angular/core";

@Injectable()
export class MyServiceMock {

    doAlert() {
        alert('MyServiceMock');
    }

    constructor() {
        console.log('MyServiceMock  ctor');
    }
}