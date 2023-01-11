import { Injectable } from "@angular/core";
import { ComponentStore } from '@ngrx/component-store';
import { combineLatest, filter, map, of, switchMap, takeUntil, tap } from "rxjs";
import { MachinesApiService } from "src/app/core/services/machines-api.service";
import { LogLevel, Machine } from "src/app/model/machine.model";
import { DEFAULT_MACHINE_LOGS_STATE, MachineLogsState } from "./machine-logs-page.model";

@Injectable()
export class MachineLogsStore extends ComponentStore<MachineLogsState> {

    readonly selectedLevel$ = this.select(x => x.selectedLevel);
    readonly searchWord$ = this.select(x => x.searchWord);
    readonly machine$ = this.select(x => x.machine);
    private readonly allLogs$ = this.machine$.pipe(filter(o => o !== null), map(item => item!.logs));
    readonly logs$ = combineLatest([this.selectedLevel$, this.allLogs$, this.searchWord$]).pipe(
        map(([levels, allLogs, searchWord]) =>
            allLogs.filter(log => levels.includes(log.level) && log.title.toLowerCase().includes(searchWord.toLowerCase()))));

    readonly isBusy$ = this.select(x => x.isBusy);

    readonly readLogs$ = this.logs$.pipe(map(items => items.filter(p => p.isRead)));
    readonly unreadLogs$ = this.logs$.pipe(map(items => items.filter(p => !p.isRead)))


    readonly loadMachine = this.effect<{ id: number }>((item$) => item$
        .pipe(
            takeUntil(this.destroy$),
            tap(item => this.patchState({ isBusy: true, machineId: item.id })),
            switchMap(item => this.api.getMachineFullDetails(item.id)),
            tap(machine => this.patchState({ machine })),
            tap(_ => this.patchState({ isBusy: false }))
        ));


    readonly setCurrentFilter = this.updater((state, levels: LogLevel[]) => {
        return { ...state, selectedLevel: levels };
    });

    readonly setSearchWord = this.updater((state, searchWord: string) => {
        return { ...state, searchWord };
    });


    readonly setReadStatus = this.updater((state, item: { id: number, isRead: boolean }) => {
        const logs = state.machine?.logs.map(x => {
            if (x.id !== item.id) {
                return x;
            }
            return { ...x, isRead: item.isRead };
        });

        return { ...state, machine: { ...state.machine, logs } } as MachineLogsState;
    });



    constructor(private api: MachinesApiService) {
        super(DEFAULT_MACHINE_LOGS_STATE)
    }
}