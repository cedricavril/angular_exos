import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestObservableService } from '../test-observable.service';

@Component({
  selector: 'app-call-observable',
  templateUrl: './call-observable.component.html',
  styleUrls: ['./call-observable.component.scss']
})
export class CallObservableComponent implements OnInit, OnDestroy {

  private subscriptionMessage$: Subscription;

  message: string;
  isComplete = false;

  constructor(private testObservableService: TestObservableService) { }

  ngOnInit() {
    this.subscriptionMessage$ = this.testObservableService.getMessageSubject().subscribe(
      (value: string) => {
        // Next
        console.log('CallObservableComponent Next', value);
        this.message = value;
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
    if (this.subscriptionMessage$) {
      console.log('CallObservableComponent unsubscribe!');
      this.subscriptionMessage$.unsubscribe();
    }
  }

}
