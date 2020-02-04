import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';
import { UserElement } from 'src/app/shared/class/user-element';

@Component({
  selector: 'app-user-set-observable',
  templateUrl: './user-set-observable.component.html',
  styleUrls: ['./user-set-observable.component.scss']
})
export class UserSetObservableComponent implements OnInit {

  constructor(private navBarService: NavBarService) { }

  ngOnInit() {
  }

  setObservable(user: UserElement) {
    console.log('setObservable', user);
    this.navBarService.setUserSubject(user);
  }

  clearObservable() {
    this.navBarService.clearUserSubject();
  }

  setObservableError() {
    console.log('setObservableError');
    this.navBarService.errorUserSubject();
  }

  setObservableComplete() {
    console.log('setObservableComplete');
    this.navBarService.completeUserSubject();
  }
}
