import { Component, OnInit } from '@angular/core';
import { UserElement } from '../../class/user-element';
import { TestSharedService } from '../../services/test-shared.service';

@Component({
  selector: 'app-user-pipe',
  templateUrl: './user-pipe.component.html',
  styleUrls: ['./user-pipe.component.scss']
})
export class UserPipeComponent implements OnInit {

  dateValue = new Date();

  userList = [
    new UserElement('Erwan', 'Baccon', 28, 'détails'),
    new UserElement('Erwan2', 'Baccon2', 15, 'détails'),
    new UserElement('Erwan3', 'Baccon3', 5, 'détails')
  ];

  constructor(
    private testSharedService: TestSharedService
  ) { }

  ngOnInit() {
  }

  callService() {
    this.testSharedService.testService();
  }

}
