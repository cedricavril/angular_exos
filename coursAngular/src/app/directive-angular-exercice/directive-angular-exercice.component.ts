import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-angular-exercice',
  templateUrl: './directive-angular-exercice.component.html',
  styleUrls: ['./directive-angular-exercice.component.scss']
})
export class DirectiveAngularExerciceComponent implements OnInit {

  condition = true;
  inputValue = 'valeur de l\'input';
  counter = 0;
  selectList = ['un', 'deux', 'trois', 'quatre'];
  itemValue: string;

  constructor() { }

  ngOnInit() {
  }

  displayConsole(message) {
    console.log(message);
  }
}
