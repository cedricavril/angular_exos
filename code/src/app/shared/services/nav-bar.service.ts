import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { UserElement } from '../class/user-element';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor() { }

  userSubject$ = new Subject<UserElement>();

  NavBarService() {
    console.log('NavBarService');
  }

  getUserSubject(): Observable<UserElement> {
    return this.userSubject$.asObservable();
  }

  setUserSubject(value: UserElement) {
    this.userSubject$.next(value);
  }

  clearUserSubject() {
    this.userSubject$.next();
  }

  // Pour l'exemple
  errorUserSubject() {
    this.userSubject$.error('Ca sent pas bon tout ça, il y a une erreur !');
  }

  // Pour l'exemple
  completeUserSubject() {
    this.userSubject$.complete();
  }

}
