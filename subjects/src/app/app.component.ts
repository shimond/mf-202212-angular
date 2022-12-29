import { Component, OnInit } from '@angular/core';
import { debounce, debounceTime, delay, filter, interval, map, Observable, share, tap } from 'rxjs';
import { CountService } from './services/count.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'subjects';
  readonly count$ = this.countService.count$
    .pipe(
      tap(x => console.log('TAP 1', x)),
      filter(num => num % 2 == 0),
      map(x => x * 10),
      tap(x => console.log('TAP 2', x)),
      debounceTime(400)
    );

  showMore = false;
  constructor(private countService: CountService) { }

  ngOnInit(): void {
    // this.httpClient.get<any>("http://www.ynet.co.il");


    // cold observable
    // const obs = new Observable<number>(o => {
    //   console.log('RAISE 1')
    //   o.next(1);
    //   console.log('RAISE 2');
    //   o.next(2);
    //   setTimeout(() => {
    //     console.log('RAISE 3');
    //     o.next(3);
    //     console.log('RAISE Complete');
    //     o.complete();
    //     console.log('RAISE 4');
    //     o.next(4);
    //   }, 2000);
    // });

    // obs.subscribe({
    //   next: item => { console.log(`CURRENT VALUE ${item}`) },
    //   error: error => { console.error(error) },
    //   complete: () => { console.log('COMPLETE!') }
    // });


    // const myInterval = interval(1000).pipe(filter(x => x % 3 == 0), delay(1000), share());
    // myInterval.subscribe(x => console.log('MY INTERVAL', x));
    // setTimeout(() => {
    //   myInterval.subscribe(x => console.log('MY INTERVAL 2', x));
    // }, 5000);


    








  }

  changeShowHide() {
    this.showMore = !this.showMore;
  }

}
