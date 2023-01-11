import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LogItem } from 'src/app/model/machine.model';
import { MachineLogsStore } from '../../pages/machine-logs/store/machine-logs-page-store';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LogListComponent {

  @Input() items!: LogItem[] | null;
  readonly displayedColumns = ['title', 'level', 'isRead', 'actions'];
  readonly dataSource = new MatTableDataSource<LogItem>;

  constructor(private store: MachineLogsStore) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'] && this.items) {
      this.dataSource.data = this.items;
    }
  }

  markRead(id: number, isRead: boolean) {
    this.store.setReadStatus({id, isRead});
  }
}
