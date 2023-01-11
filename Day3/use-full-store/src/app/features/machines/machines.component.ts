import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { MachinesApiService } from 'src/app/core/services/machines-api.service';
import { MachineSlim } from 'src/app/model/machine.model';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {

  machines$ = this.machinService.getAllMachines();

  constructor(private machinService: MachinesApiService) {

  }

  ngOnInit(): void {
  }


}
