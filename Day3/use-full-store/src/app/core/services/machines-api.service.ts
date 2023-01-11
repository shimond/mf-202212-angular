import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { LogItem, Machine, MachineSlim } from 'src/app/model/machine.model';

@Injectable({
  providedIn: 'root'
})
export class MachinesApiService {

  private machines: Machine[] = [];

  getAllMachines(): Observable<MachineSlim[]> {
    const items = this.machines.map(({ id, displayName }) => ({ id, displayName }))
    return of(items);
  }

  getMachineFullDetails(machineId: number): Observable<Machine | undefined> {
    return of(this.machines.find(x => x.id === machineId)).pipe(delay(1200));
  }

  constructor() {
    for (let index = 0; index < 7; index++) {

      const logs: LogItem[] = [];
      for (let index1 = 0; index1 < 15; index1++) {
        logs.push({
          id: index * index1,
          title: `Title of  ${index}_${index1}`,
          isRead: index1 % 2 === 0,
          level: index1 % 3 === 0 ? 'ERROR' : index1 % 3 === 1 ? 'WARN' : 'INFO'
        })
      }

      this.machines.push({
        id: index,
        displayName: 'Name of' + index,
        logs: logs
      });
    }



  }
}
