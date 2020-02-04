import { Component, OnInit } from '@angular/core';
import { UserElement } from './shared/class/user-element';
import { NavBarService } from './shared/services/nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'coursAngular';

  listeUsersValue: UserElement[];

  userSelected: UserElement;

  constructor(private navBarService: NavBarService) {
    this.listeUsersValue = [
      new UserElement('Observables - prénom user 1', 'nom user 1', 80, 'details pour user 1'),
      new UserElement('Observables - prénom user 2', 'nom user 2', 70, 'details pour user 2'),
      new UserElement('Observables - prénom user 3', 'nom user 3', 60, 'details pour user 3'),
      new UserElement('Observables - prénom user 4', 'nom user 4', 50, 'details pour user 4')
    ];
  }

  ngOnInit() {
  }

  displayUser(user: UserElement) {
    if (user) {
      console.log(user);
      this.navBarService.setUserSubject(user);
    }
  }

}
