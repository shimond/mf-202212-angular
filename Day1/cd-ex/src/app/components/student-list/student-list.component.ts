import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListComponent implements OnInit {

  @Input() students: Student[] | undefined;

  bd = new Date();
  format = 'dd/MM/yyyy';
  constructor() { }

  ngOnInit(): void {
  }

  stam() {
    this.students![2].grade = 1;
  }

  trackById(index: number, item: Student) {
    return item.id;
  }
  
  getColorByItem(item: Student) {
    console.log('getColorByItem');
    if (item.grade > 90) {
      return 'gold';
    }

    if (item.grade > 70) {
      return 'silver';
    }

    return 'red';
  }

}
