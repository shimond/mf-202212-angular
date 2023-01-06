import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CountService {
    private readonly countSubject$ = new BehaviorSubject<number>(0);
    readonly count$ = this.countSubject$.asObservable();
    readonly evenNumbers$ = this.count$.pipe(filter(o => o % 2 === 0));


    constructor() { }

    plus() {
        this.countSubject$.next(this.countSubject$.value + 1);
    }
    minus() {
        this.countSubject$.next(this.countSubject$.value - 1);
    }
}
