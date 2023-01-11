import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, switchMap } from 'rxjs';
import { MachinesApiService } from 'src/app/core/services/machines-api.service';
import { LogLevel, Machine } from 'src/app/model/machine.model';
import { MachineLogsStore } from './store/machine-logs-page-store';

@Component({
  selector: 'app-machine-logs',
  templateUrl: './machine-logs.component.html',
  styleUrls: ['./machine-logs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MachineLogsStore]
})
export class MachineLogsComponent implements OnInit {
  readonly machine$ = this.machineLogsStore.machine$;
  readonly unreadLogs$ = this.machineLogsStore.unreadLogs$;
  readonly readLogs$ = this.machineLogsStore.readLogs$;

  readonly isBusy$ = this.machineLogsStore.isBusy$;
  readonly machineName$ = this.machine$.pipe(map(x => x?.displayName));
  readonly selectedLevels$: Observable<LogLevel[]> = this.machineLogsStore.selectedLevel$.pipe(filter(x => !!x));

  constructor(
    private machineLogsStore: MachineLogsStore,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id$ = this.activatedRoute.params.pipe(map(p => ({ id: +p['machineId'] })))
    this.machineLogsStore.loadMachine(id$);
  }
}
