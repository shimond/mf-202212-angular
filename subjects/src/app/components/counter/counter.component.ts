import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  count = 0;
  readonly count$ = this.countService.count$.pipe(map(o => o * 3));
  //1: Memory issue 
  //2: Change value from the component code - done
  //3: late joiner - done
  private subs = new Subscription();

  constructor(private countService: CountService) { }

  ngOnInit(): void {
    // const sub = this.countService.count$.subscribe(newVal => {
    //   this.count = newVal;
    // });
    // this.subs.add(sub);
  }

  plus() {
    this.countService.plus();
  }

  minus() {
    this.countService.minus();

  }

  ngOnDestroy(): void {
    // this.subs.unsubscribe();
  }

}
// UI EVETS
// Async :
  // time out
  // http
  // interval