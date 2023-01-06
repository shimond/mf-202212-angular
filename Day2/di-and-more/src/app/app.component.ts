import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di-and-more';
  hide = false;

  constructor(private router: Router) {

  }
  hideAll() {
    this.hide = true;
  }

  navigateTo10ByCode() {
    this.router.navigate(['/', 'admin', 'kefel', 12], {
      queryParams: { op: '+' }
    });
  }
}
