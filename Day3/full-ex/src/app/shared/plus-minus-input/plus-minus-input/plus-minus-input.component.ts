import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-plus-minus-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plus-minus-input.component.html',
  styleUrls: ['./plus-minus-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PlusMinusInputComponent,
      multi:true
    }
  ]
})
export class PlusMinusInputComponent implements ControlValueAccessor {

  count = 0;
  disabled = false;
  changeCallBack: any;

  raiseEvent() {
    if (this.changeCallBack) {
      this.changeCallBack(this.count);
    }
  }
  plus() {
    this.count++;
    this.raiseEvent();
  }
  minus() {
    this.count--;
    this.raiseEvent();
  }

  writeValue(obj: any): void {
    this.count = obj;
  }

  registerOnChange(fn: any): void {
    this.changeCallBack = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
