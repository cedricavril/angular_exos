import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view-from-server',
  templateUrl: './user-view-from-server.component.html',
  styleUrls: ['./user-view-from-server.component.scss']
})
export class UserViewFromServerComponent implements OnInit {
  sentDetails: string;

  constructor() {
  }

  ngOnInit() {
  }

  receiveDataFromChild(data) {
    console.log('reçu : ', data);
    this.sentDetails = data;
  }

}
