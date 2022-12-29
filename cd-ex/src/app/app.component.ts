import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Student } from './model/student.model';
import { Todo } from './model/todo.model';
import { StudentsApiService } from './services/students-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'cd-ex';
  studentsInRoot$ = this.studentsApiService.getAllStudents();
  count = 0;

  constructor(private studentsApiService: StudentsApiService) {

  }

  ngOnInit(): void {
  }

  changeIt() {
      // const a = this.studentsInRoot$.map(x=> x.id !== 1 ? x : {...x, firstName:'new Name'}); 
    //this.studentsInRoot[1].firstName = "NEW NAME";
    // this.studentsInRoot = [];
    // const list = this.studentsInRoot$.map(x => ({ ...x }));
    // this.studentsInRoot$ = [...list, { id: 10, lastName: 'lName', firstName: 'fName', gender: 'Other', grade: 100 }];
  }

  getText() {
    console.log('getText');
    return 'this is the text';
  }
}
