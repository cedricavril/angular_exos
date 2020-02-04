import { Component, OnInit, Input } from '@angular/core';
import { UserElement } from '../../class/user-element';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-user-row]',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})
export class UserRowComponent implements OnInit {

  @Input() userValueForChild: UserElement;

  constructor() {
  }

  ngOnInit() {
  }


}
