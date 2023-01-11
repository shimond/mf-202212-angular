import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'use-full-store';
  isAuth$ = this.auth.isAuth$;
  constructor(private auth: AuthService) {

  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
