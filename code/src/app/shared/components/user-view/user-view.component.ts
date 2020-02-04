import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserWebService } from 'src/app/shared/webservices/user.webservice';
// import { UserElement } from 'src/app/shared/class/user-element';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit, OnDestroy {
  private subscriptionUser$: Subscription;
  users: User[];
  isComplete = false;
  userToSend: User;

  constructor(private userWebService: UserWebService) {  }

  ngOnInit() {
    console.log('test display-select on init');

    this.subscriptionUser$ = this.userWebService.getUsers().subscribe(
      (value: User[]) => {
        // Next
        console.log('UserViewComponent Next', value);
        this.users = value;
      }, (error) => {
        // Error
        console.error('UserViewComponent error', error);
      }, () => {
        // Complete
        console.log('UserViewComponent Complete');
        this.isComplete = true;
      }
    );
  }

  receiveDataFromChild(index) {
    console.log('reçu : ', this.users, 'user to send : ', this.users[index]);
    if (index) {
      this.userToSend = this.users[index];
    }
  }

  ngOnDestroy() {
    console.log('UserViewComponent destroy! Boom !');
    if (this.subscriptionUser$) {
      console.log('UserViewComponent unsubscribe!');
      this.subscriptionUser$.unsubscribe();
    }
  }
}
