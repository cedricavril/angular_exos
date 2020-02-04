import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingElement } from '../../class/shopping-element';

@Component({
  selector: 'app-shopping-fils',
  templateUrl: './shopping-fils.component.html',
  styleUrls: ['./shopping-fils.component.scss']
})
export class ShoppingFilsComponent implements OnInit {

  @Input() listeCourseValueForChild: ShoppingElement[];
  @Output() eventEmitterForChild = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  callParent(index) {
    console.log('Depuis l enfant', index);
    this.eventEmitterForChild.emit(index);
  }


}
