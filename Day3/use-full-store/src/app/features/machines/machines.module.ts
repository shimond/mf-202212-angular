import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachinesRoutingModule } from './machines-routing.module';
import { MachinesComponent } from './machines.component';
import { MatTableModule } from '@angular/material/table';
import { MachineListComponent } from './components/machine-list/machine-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MachineLogsComponent } from './pages/machine-logs/machine-logs.component';
import { LogsSelectorComponent } from './components/logs-selector/logs-selector.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogListComponent } from './components/log-list/log-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShowIfAuthDirective } from 'src/app/shared/directives/show-if-auth.directive';

@NgModule({
  declarations: [
    MachinesComponent,
    MachineListComponent,
    MachineLogsComponent,
    LogsSelectorComponent,
    LogListComponent
  ],
  imports: [
    CommonModule,
    MachinesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    ShowIfAuthDirective,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MachinesModule { }
