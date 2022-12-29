import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradeToColor'
})
export class GradeToColorPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    console.log('GradeToColorPipe', value);
    if (value > 90) {
      return 'gold';
    }

    if (value > 70) {
      return 'silver';
    }
    return 'red';
  }

}



//event handler

//Http
//setTimout
//setInterval


