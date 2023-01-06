import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CountStoreService } from './services/counter-withState.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'use-basic-store';

  constructor(private store: CountStoreService) {

    this.store.plusUpdater();

    this.store.minusUpdater();


    this.store.setCurrnetCount(20);

    this.store.setCurrnetCount(of(20));


  }

}
