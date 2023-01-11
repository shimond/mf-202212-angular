import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { LogLevel } from 'src/app/model/machine.model';
import { MachineLogsStore } from '../../pages/machine-logs/store/machine-logs-page-store';
import { MachineLogsState } from '../../pages/machine-logs/store/machine-logs-page.model';

@Component({
  selector: 'app-logs-selector',
  templateUrl: './logs-selector.component.html',
  styleUrls: ['./logs-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogsSelectorComponent implements OnChanges, OnInit {

  @Input() selectedLevels: LogLevel[] | null = null;

  readonly levelsControl = new FormControl<LogLevel[]>([]);
  readonly searchControl = new FormControl<string>('');

  readonly allLevels: LogLevel[] = ['ERROR', 'INFO', 'WARN'];


  constructor(private store: MachineLogsStore) {

  }

  ngOnInit(): void {
    this.store.setSearchWord(this.searchControl.valueChanges as Observable<string>)
    this.store.setCurrentFilter(this.levelsControl.valueChanges as Observable<LogLevel[]>);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedLevels'] && this.selectedLevels) {
      this.levelsControl.setValue(this.selectedLevels);
    }
  }

}
