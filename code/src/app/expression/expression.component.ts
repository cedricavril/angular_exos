import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit {

  colorClass = 'app-bg-green';
  inputType = 'color';

  constructor() { }

  ngOnInit() {
  }

}
