import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserElement } from 'src/app/shared/class/user-element';
import { Subscription } from 'rxjs';
import { NavBarService } from './../../../../shared/services/nav-bar.service';

@Component({
  selector: 'app-display-select',
  templateUrl: './display-select.component.html',
  styleUrls: ['./display-select.component.scss']
})
export class DisplaySelectComponent implements OnInit, OnDestroy {

  private subscriptionUser$: Subscription;
  user: UserElement;
  isComplete = false;

  constructor(private navBarService: NavBarService) {  }

  ngOnInit() {
    console.log('test display-select on init');

    this.subscriptionUser$ = this.navBarService.getUserSubject().subscribe(
      (value: UserElement) => {
        // Next
        console.log('DisplaySelectComponent Next', value);
        this.user = value;
      }, (error) => {
        // Error
        console.error('DisplaySelectComponent error', error);
      }, () => {
        // Complete
        console.log('DisplaySelectComponent Complete');
        this.isComplete = true;
      }
    );
  }

  ngOnDestroy() {
    console.log('DisplaySelectComponent destroy! Boom !');
    if (this.subscriptionUser$) {
      console.log('DisplaySelectComponent unsubscribe!');
      this.subscriptionUser$.unsubscribe();
    }
  }
}
