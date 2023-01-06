import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsApiService {

  getAllStudents(): Observable<Student[]> {
    const studentsInRoot: Student[] = []
    studentsInRoot.push({
      id: 1, firstName: 'Moshe', lastName: 'Cohen', grade: 80, gender: 'Male'
    });
    studentsInRoot.push({
      id: 2, firstName: 'Hadar', lastName: 'Levi', grade: 76, gender: 'Fmale'
    });
    studentsInRoot.push({
      id: 3, firstName: 'Tal', lastName: 'Cohen', grade: 90, gender: 'Male'
    });
    studentsInRoot.push({
      id: 4, firstName: 'Gilad', lastName: 'Dahan', grade: 70, gender: 'Male'
    });
    studentsInRoot.push({
      id: 5, firstName: 'Naama', lastName: 'Cohen', grade: 100, gender: 'Fmale'
    });

    return of(studentsInRoot).pipe(delay(2500));
  }

  constructor() { }
}
