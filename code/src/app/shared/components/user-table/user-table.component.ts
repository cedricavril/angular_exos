import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { UserElement } from '../../class/user-element';
import { Subscription } from 'rxjs';
import { UserWebService } from 'src/app/shared/webservices/user.webservice';
// import { UserElement } from 'src/app/shared/class/user-element';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, OnDestroy {

  @Output() sendDetails = new EventEmitter();
  listeUsersValue: User[];
  isComplete = false;
  sentDetails: string;

  private subscriptionUser$: Subscription;

  constructor(private userWebService: UserWebService) {  }

  ngOnInit() {
    this.listeUsersValue = [
      new User('prénom user 1', 'nom user 1', 80),
      new User('prénom user 2', 'nom user 2', 70),
      new User('prénom user 3', 'nom user 3', 60),
      new User('prénom user 4', 'nom user 4', 50)
    ];
    this.subscriptionUser$ = this.userWebService.getUsers().subscribe(
        (value: User[]) => {
          // Next
          console.log('UserViewComponent Next', value);
          this.listeUsersValue = Object.values(value);
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

  displayDetails(data) {
    console.log('à émettre : ', data);
    this.sendDetails.emit(data);
  }
  ngOnDestroy() {
    console.log('UserViewComponent destroy! Boom !');
    if (this.subscriptionUser$) {
      console.log('UserViewComponent unsubscribe!');
      this.subscriptionUser$.unsubscribe();
    }
  }


}
