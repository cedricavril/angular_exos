import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user/user.model';

@Component({
  selector: 'app-typage-exercice',
  templateUrl: './typage-exercice.component.html',
  styleUrls: ['./typage-exercice.component.scss']
})
export class TypageExerciceComponent implements OnInit {

  user = new User();

  constructor() {
    this.user.init();
   }

  ngOnInit() {
    this.user.init();     // 4 fois
    console.log('test');  // 1 fois
  }
}
