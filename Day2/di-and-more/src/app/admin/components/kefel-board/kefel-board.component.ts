import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { combineLatest, delay, map, Observable } from 'rxjs';

@Component({
  selector: 'app-kefel-board',
  templateUrl: './kefel-board.component.html',
  styleUrls: ['./kefel-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KefelBoardComponent implements OnInit, OnDestroy {
  vm$!: Observable<{ size: number, op: string, items: { x: number, y: Number }[] }>;
  op$!: Observable<string>;
  size$!: Observable<number>;
  items$!: Observable<{ x: number, y: Number }[]>;
  operator: any;
  constructor(
    private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.op$ = this.activatedRoute.queryParams.pipe(map(qp => qp['op'] || '+'));
    this.size$ = this.activatedRoute.params.pipe(map(x => +x['sizeInRule']));

    const opAndSize$ = combineLatest([this.op$, this.size$])

    this.items$ = opAndSize$.pipe(
      map(([op, size]) => {
        const itemsTemp = [];
        for (let index = 1; index <= size; index++) {
          for (let index2 = 1; index2 <= size; index2++) {
            itemsTemp.push({ x: index, y: index2 });
          }
        }
        return itemsTemp;
      }));

    this.vm$ = combineLatest([this.size$, this.op$, this.items$]).pipe(
      delay(2000),
      map(([size, op, items]) => ({ size, op, items })));

  }

  ngOnDestroy(): void {
    console.log('kefel destroy');
  }

}
