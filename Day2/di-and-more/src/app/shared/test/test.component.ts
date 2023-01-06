import { Inject, Component, OnInit, Optional, Host, SkipSelf } from '@angular/core';
import { MICROPROJECT_LANGUAGE } from 'src/app/core/injection-tokens';
import { MyService } from 'src/app/core/services/my.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [MyService]
})
export class TestComponent implements OnInit {
  currentLang: string;

  //@Optional()
  //@Host()
  //@SkipSelf()
   
  constructor(
     private readonly myService: MyService,
    @Inject(MICROPROJECT_LANGUAGE) private readonly lan: string) {
    console.log('TEST');
    this.currentLang = lan;
  }

  ngOnInit(): void {
  }

}
