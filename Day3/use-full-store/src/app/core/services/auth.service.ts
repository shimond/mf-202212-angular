import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuth$ = this.isAuthSubject.asObservable();

  constructor() { }

  login() {
    this.isAuthSubject.next(true);
  }
  
  logout() {
    this.isAuthSubject.next(false);
  }
}
