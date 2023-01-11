import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PlusMinusInputComponent } from './shared/plus-minus-input/plus-minus-input/plus-minus-input.component';

export interface Person {
  id: number;
  name: string;
  age: number;
  grade: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'full-ex';
  form = this.fb.group({
    id: new FormControl<number>(-1),
    name: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    age: new FormControl<number>(0),
    grade: new FormControl<number>(0),

  })


  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    const per: Person = { id: 20, name: 'David', age: 82, grade: 89 };
    this.form.setValue(per);
  }


}
