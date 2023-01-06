import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BehaviorSubject, filter, Subject, takeUntil } from 'rxjs';

export interface CountState {
    count: number;
}

const DEFAULT_VALUES: CountState = { count: 0 };

@Injectable()
export class CountStoreService extends ComponentStore<CountState> {
    readonly count$ = this.select(state => state.count);
    readonly evenNumbers$ = this.count$.pipe(
        takeUntil(this.destroy$),
        filter(o => o % 2 === 0));

    readonly plusUpdater = this.updater((currentState) => {
        return { ...currentState, count: currentState.count + 1 };
    });

    readonly minusUpdater = this.updater((currentState) => {
        return { ...currentState, count: currentState.count + 1 };
    });

    readonly setCurrnetCount = this.updater((currentState, newCount: number) => {
        return { ...currentState, count: newCount };
    });

    reset() {
        this.setState(DEFAULT_VALUES);
    }

    constructor() {
        super(DEFAULT_VALUES)
    }

}
