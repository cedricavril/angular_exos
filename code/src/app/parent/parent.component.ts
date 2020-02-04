import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  numberValue = 2;
  stringValue = 'Erwan';

  constructor() { }

  ngOnInit() {
  }

  callByChild(event) {
    console.log('Dans le parent', event);
  }

}
