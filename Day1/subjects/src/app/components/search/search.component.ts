import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl = new FormControl<string>('');
  //value$ = this.searchControl.valueChanges.pipe(debounceTime(200));
  result$!: Observable<string[]>;
  constructor(private httpClient: HttpClient) { }

  getValues(s: string): string[] {
    return [];
  }

  ngOnInit(): void {
    this.result$ = this.searchControl.valueChanges.pipe(
      switchMap(term => this.httpClient.get<string[]>('https://localhost:7080/search/' + term)));
   
   
      // this.searchControl.valueChanges.subscribe(term => {
    //   .subscribe(list => {
    //     this.result = list;
    //   });
    // });

    // this.searchControl.valueChanges
    //   .pipe(debounceTime(200))
    //   .subscribe(x => console.log(x));


  }

}
