import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text-color',
  templateUrl: './input-text-color.component.html',
  styleUrls: ['./input-text-color.component.scss']
})
export class InputTextColorComponent implements OnInit {

  classText = '';
  textContent = 'text content';
  inputValue = 0;
  constructor() { }

  ngOnInit() {
  }

  changeTextClass() {
    this.classText = 'color-';
    // test de truthy - important pour la sécurité
    if (this.inputValue || this.inputValue === 0) {
      if (this.inputValue <= 0 ) {
          this.textContent = 'unknown';
          this.inputValue = 0;
      }
      if (this.inputValue < 6  ) {
        this.classText += 'red';
        this.textContent = 'petit';
      } else if (this.inputValue < 11 ) {
        this.classText += 'blue';
        this.textContent = 'moyen';
      } else if (this.inputValue < 16 ) {
        this.classText += 'green';
        this.textContent = 'grand';
      } else {
        this.classText += 'red';
        this.textContent = 'unknown';
      }
    }
  }
}
