import { Component, OnInit } from '@angular/core';
import { ShoppingElement } from '../../class/shopping-element';

@Component({
  selector: 'app-shopping-parent',
  templateUrl: './shopping-parent.component.html',
  styleUrls: ['./shopping-parent.component.scss']
})
export class ShoppingParentComponent implements OnInit {

  listeCourseValue: ShoppingElement[];
  currentShoppingElement: ShoppingElement;
  index: number;

  constructor() { }

  ngOnInit() {
    this.currentShoppingElement = new ShoppingElement();

    this.listeCourseValue = [{
      nom: 'Oeufs de la ferme',
      quantite: 12
    },
    {
      nom: 'Lait',
      quantite: 4
    },
    {
      nom: 'Cointreau',
      quantite: 1
    },
    {
      nom: 'Sucre',
      quantite: 50
    },
    {
      nom: 'Farine',
      quantite: 300
    }
  ];
}
  addElement() {
    this.listeCourseValue.push(this.currentShoppingElement);
  }
  delElement(index) {
    console.log('console log depuis le parent', index);
    if (index === 0 || index) {
      this.listeCourseValue.splice(index, 1);
    }
  }
}
