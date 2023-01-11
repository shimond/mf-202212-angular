import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MachineSlim } from 'src/app/model/machine.model';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})
export class MachineListComponent implements OnChanges {

  @Input() items!: MachineSlim[] | null;
  readonly displayedColumns = ['id', 'displayName', 'actions'];
  readonly dataSource = new MatTableDataSource<MachineSlim>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'] && this.items) {
      this.dataSource.data = this.items;
    }
  }


}
