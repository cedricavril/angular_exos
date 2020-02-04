import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserElement } from 'src/app/shared/class/user-element';
import { Subscription } from 'rxjs';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';

@Component({
  selector: 'app-user-call-observable',
  templateUrl: './user-call-observable.component.html',
  styleUrls: ['./user-call-observable.component.scss']
})
export class UserCallObservableComponent implements OnInit, OnDestroy {

  private subscriptionUser$: Subscription;
  user: UserElement;
  isComplete = false;

  constructor(private navBarService: NavBarService) { }

  ngOnInit() {
    this.subscriptionUser$ = this.navBarService.getUserSubject().subscribe(
      (value: UserElement) => {
        // Next
        console.log('CallObservableComponent Next', value);
        this.user = value;
      }, (error) => {
        // Error
        console.error('CallObservableComponent error', error);
      }, () => {
        // Complete
        console.log('CallObservableComponent Complete');
        this.isComplete = true;
      }
    );
  }

  ngOnDestroy() {
    console.log('CallObservableComponent destroy! Boom !');
    if (this.subscriptionUser$) {
      console.log('CallObservableComponent unsubscribe!');
      this.subscriptionUser$.unsubscribe();
    }
  }
}
