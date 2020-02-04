import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.scss']
})
export class FirstTestComponent implements OnInit {

  // Variable public
  public numberTest: number;
  public numberTest2 = 2;
  public asyncVariable = undefined;

  // Viriable private

  constructor() {
    this.numberTest = 102;
  }

  ngOnInit() {
    this.displayText('test');
  }

  public getNumberUser(): number {
    return 2;
  }

  public displayText(text: string): string {

    return text;
  }

}
