import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-typage',
  templateUrl: './typage.component.html',
  styleUrls: ['./typage.component.scss']
})
export class TypageComponent implements OnInit {

  user: User;
  userWithValue = new User('Erwan', 'Baccon', 2);

  userJson = {
    name: 'Erwan',
    age: 2
  };

  constructor() {
    console.log(this.userWithValue);
    console.log(this.userJson);
    console.log(this.userWithValue.fullName());
  }

  ngOnInit() {
  }

}
