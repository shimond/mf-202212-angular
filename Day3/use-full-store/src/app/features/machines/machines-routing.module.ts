import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from './machines.component';
import { MachineLogsComponent } from './pages/machine-logs/machine-logs.component';

const routes: Routes = [
  { path: '', component: MachinesComponent },
  { path: 'logs/:machineId', component: MachineLogsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachinesRoutingModule { }
