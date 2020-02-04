import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit {

  expressionColor: string;
  expressionInputType: string;

  constructor() { }

  ngOnInit() {
    this.expressionColor = 'app-bg-red';
    this.expressionInputType = 'color';
  }
}
